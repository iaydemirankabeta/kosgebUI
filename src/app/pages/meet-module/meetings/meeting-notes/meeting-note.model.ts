import { MeetingNoteType } from "../meeting.model";

export interface MeetingNote {
  id?: string;
  meetingId: string;
  note: string;
  userId:string;
  noteType:MeetingNoteType;
}

