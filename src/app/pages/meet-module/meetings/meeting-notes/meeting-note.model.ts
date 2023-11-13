export class MeetingNote {
  id: number;
  meetingId: number;
  content: string;
  category: string;
  bilgi: any;
  yapilabilecekler: any;
  yapilacaklar: any;

  // Dizin imzası ekleyin
  [key: string]: any;

  constructor(id: number, meetingId: number, content: string, category: string) {
    this.id = id;
    this.meetingId = meetingId;
    this.content = content;
    this.category = category;
  }
}
