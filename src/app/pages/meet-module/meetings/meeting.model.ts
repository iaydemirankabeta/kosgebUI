// meeting.model.ts
export class Meeting {
  id:string;
  name:string;
  topic:string;
  meetingDate:Date;
  meetingLink:string;
  location:string;
  city:string;
  company:{name:string;}
  participants:{isim:string;soyisim:string;email:string;unvan:string};
  excludeParticipants:{isim:string;soyisim:string;email:string;unvan:string;companyName:string};
  meetingNotes:MeetingNote[]
  }
  export interface MeetingNote{
    note:string;
    type:MeetingNoteType
  }
  export enum MeetingNoteType{
    Did=0,
    Can=1,
    Info=2,
    NumberofProjects=3
  }

export interface BaseDTO {
    id: string;
    userId: string;
    companyId: string;
}
export interface MeetingDTO extends BaseDTO {
    name: string;
    topic: string;
    meetingDate: string;
    meetingLink: string;
    participants: string[];
    excludeUserDtos: ExcludeUserDto[];
    deletedParticipants: string[];
    deletedExcludeUsers: string[];
    isDeleted: boolean;
}

export interface ExcludeUserDto extends BaseDTO {
    eMail: string;
    name: string;
    title: string;
    department: string;
    companyName: string;
}