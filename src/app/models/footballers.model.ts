export class Footballers {

    id?: string;
    photo: string;
    firstname: string;
    lastname: string;
    post: string;
    nationality: string;
    club: string;
    goals: number;
    trophies: number;
    onBench: boolean;
  
    constructor() {
        this.photo = "";
        this.firstname = "";
        this.lastname = "";
        this.post = "";
        this.nationality = "";
        this.club = "";
        this.goals = 0;
        this.trophies = 0;
        this.onBench = false;
    }
}
