import { Injectable } from '@angular/core';
import { MeetingNote } from './meeting-note.model';

@Injectable({
  providedIn: 'root',
})
export class MeetingNotesService {
  private meetingNotes: MeetingNote[] = [];

  constructor() {
    // Örnek notları burada yükleme veya başka bir kaynaktan almak için kullanabilirsiniz.
    this.loadSampleNotes();
  }

  private loadSampleNotes() {
    // Örnek notları yükleme
    const note1 = new MeetingNote(1, 1, 'Yapılacaklar 1', 'Yapılacaklar');
    const note2 = new MeetingNote(2, 1, 'Bilgi 1', 'Bilgi');
    const note3 = new MeetingNote(3, 2, 'Yapılabilecekler 1', 'Yapılabilecekler');
    this.meetingNotes.push(note1, note2, note3);
  }

  getMeetingNotes(meetingId: number): MeetingNote[] {
    // Belirli bir toplantıya ait notları döndürme
    return this.meetingNotes.filter((note) => note.meetingId === meetingId);
  }

  addMeetingNote(note: MeetingNote) {
    // Yeni bir not eklemek
    note.id = this.generateNoteId();
    this.meetingNotes.push(note);
  }

  private generateNoteId(): number {
    // Yeni bir not için benzersiz bir ID üretme
    const maxId = Math.max(...this.meetingNotes.map((note) => note.id), 0);
    return maxId + 1;
  }
}
