// meeting.model.ts
export class Meeting {
    id: number;
    name: string;
    date: Date;
    location: string;
    city:string;
    participants: string[];
    url:string;

  
    constructor(id: number, name: string, date: Date, location: string,city:string,participants:string[],url:string) {
      this.id = id;
      this.name = name;
      this.date = date;
      this.location = location;
      this.city = city;
      this.participants = participants;
      this.url = url;
    }
  }
  export class Note {
    content: string;
    category: string;
  }