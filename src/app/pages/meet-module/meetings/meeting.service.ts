import { Injectable } from '@angular/core';
import { Meeting,Note } from './meeting.model';


@Injectable({
  providedIn: 'root',
})



export class MeetingService {
  private meetings: Meeting[] = [
    new Meeting(1, 'Toplantı 1', new Date('2023-10-15'), 'Ofis A', ['Katılımcı 1', 'Katılımcı 2'],'www.toplanti1.com'),
    new Meeting(1, 'Toplantı 2', new Date('2023-10-15'), 'Ofis B', ['Katılımcı 4', 'Katılımcı 5'],'www.toplanti2.com'),
    new Meeting(1, 'Toplantı 3', new Date('2023-10-15'), 'Ofis C', ['Katılımcı 23', 'Katılımcı 7'],'www.toplanti3.com'),
    new Meeting(1, 'Toplantı 4', new Date('2023-10-15'), 'Ofis D', ['Katılımcı 1', 'Katılımcı 2'],'www.toplanti4.com'),
    // Daha fazla toplantı ekleyebilirsiniz.
  ];

  // meetingNotes adlı özelliği tanımlayın ve başlangıçta boş bir harita olarak başlatın
  private meetingNotes: Map<number, Note[]> = new Map<number, Note[]>();

  constructor() {
    // Notları örnek olarak burada doldurabilirsiniz.
    // Örneğin, Toplantı 1 için notlar:
    this.meetingNotes.set(1, [
      { content: 'Yapılacaklar 1', category: 'Yapılacaklar' },
      { content: 'Yapılabilecekler 1', category: 'Yapılabilecekler' },
      { content: 'Bilgi 1', category: 'Bilgi' },
    ]);
  }

  getMeetingNotes(meeting: Meeting): Note[] {
    const meetingId = meeting.id;
    return this.meetingNotes.get(meetingId) || [];
  }
  private notes: Note[] = [];

  getMeetings(): Meeting[] {
    return this.meetings;
  }


  addMeeting(meeting: Meeting) {
    this.meetings.push(meeting);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }
  

  updateMeetingLink(meeting: Meeting) {
    // Link güncelleme kodu burada
  }
}
