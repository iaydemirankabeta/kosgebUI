import { Component, Input, ViewChild } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MeetingNote } from './meeting-note.model';
import { MeetingNotesService } from './meeting-notes.service';
import { Meeting } from '../meeting.model';
import { Observable } from 'rxjs';
import { AuthService, UserType } from 'src/app/modules/auth';

@Component({
  selector: 'app-meeting-notes',
  templateUrl: './meeting-notes.component.html',
  styleUrls: ['./meeting-notes.component.scss']
})
export class MeetingNotesComponent {
  meetingId: number;
  meetingNotes: MeetingNote[] = [];
  newNote: MeetingNote = new MeetingNote(0, 0, '', ''); // Yeni not oluşturmak için
  @Input() meeting: Meeting | undefined; // @Input ile gelen meeting verisi
  user$: Observable<UserType>;


  fakeNotes: { [key: string]: MeetingNote[] } = {
    'Yapılacaklar': [
      new MeetingNote(1, 1, 'Yapılacak 1', 'Yapılacaklar'),
      new MeetingNote(2, 1, 'Yapılacak 2', 'Yapılacaklar')
    ],
    'Yapılabilecekler': [
      new MeetingNote(3, 1, 'Yapılabilecek 1', 'Yapılabilecekler'),
      new MeetingNote(4, 1, 'Yapılabilecek 2', 'Yapılabilecekler')
    ],
    'Bilgi': [
      new MeetingNote(5, 1, 'Bu bir bilgidir.', 'Bilgi'),
      new MeetingNote(6, 1, 'BÜyük işletmeler buradan feyz alabilir.', 'Bilgi')
    ]
  };

  constructor(
    private route: ActivatedRoute,
    private meetingNotesService: MeetingNotesService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {
    this.user$ = this.auth.currentUserSubject.asObservable();

    // URL'den toplantı kimliğini al
    this.meetingId = Number(this.route.snapshot.paramMap.get('id'));
    // Toplantı notlarını al
    this.loadMeetingNotes();
    
  }

  private loadMeetingNotes() {
    this.meetingNotes = this.meetingNotesService.getMeetingNotes(this.meetingId);
  }

  notesByCategory: { [key: string]: string } = {};

  addMeetingNote(category: string) {
    const categoryNotes = this.fakeNotes[category];
    if (categoryNotes && categoryNotes.length > 0) {
      // İlgili kategoriye ait yeni bir not ekleyin
      const newNoteId = categoryNotes.length + 1;
      const newNoteContent = this.newNote[category]; // Yeni not içeriğini alın
      if (newNoteContent && newNoteContent.trim() !== '') {
        const newMeetingNote = new MeetingNote(newNoteId, this.meetingId, newNoteContent, category);
        categoryNotes.push(newMeetingNote);
        // Yeni not eklendikten sonra textarea içeriğini temizleyin
        this.newNote[category] = '';
      }
    }
  }
  
  removeMeetingNote(category: string, noteId: number) {
    const categoryNotes = this.fakeNotes[category];
    if (categoryNotes) {
      // Notu kaldır
      const noteIndex = categoryNotes.findIndex(note => note.id === noteId);
      if (noteIndex !== -1) {
        categoryNotes.splice(noteIndex, 1);
      }
    }
  }
  



  newNoteContent(category: string): string {
    const fakeNotesForCategory = this.fakeNotes[category];
    if (fakeNotesForCategory) {
      return fakeNotesForCategory.map(note => note.content).join('\n');
    }
    return '';
  }
  

}
