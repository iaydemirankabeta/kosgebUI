import { MeetingNote } from "./meeting-notes/meeting-note.model";

// meeting.model.ts
export class Meeting {
  id:string;
  name:string;
  topic:string;
  meetingDate:Date;
  meetingLink:string;
  location:string;
  city:{
    id: string;cityName:string
};
  company:{name:string;}
  participants:{name:string;email:string;unvan:string}[];
  excludeParticipants:{name:string;email:string;unvan:string;companyName:string}[];
  meetingNotes:MeetingNote[]
  }
  export enum MeetingNoteType{
    Will=0,
    Can=1,
    Info=2,
    NumberofProjects=3,
    EstimatedExportInformation=4,
    OverseasOfficeInformation=5,
    MarketShare=6
  }

export interface BaseDTO {
    id: string;
    userId?: string;
    companyId?: string;
}
export interface MeetingDTO extends BaseDTO {
    name?: string;
    topic?: string;
    cityId?:string;
    companyId?:string;
    meetingDate?: string;
    meetingHour?: string;
    meetingLink?: string;
    participants?: string[];
    excludeUserDtos?: ExcludeUserDto[];
    deletedParticipants?: string[];
    deletedExcludeUsers?: string[];
    isDeleted?: boolean;
}

export interface ExcludeUserDto extends BaseDTO {
    eMail: string;
    name: string;
    title: string;
    department: string;
    companyName: string;
}