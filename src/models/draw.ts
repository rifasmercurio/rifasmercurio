import { DateTime } from "../../node_modules/ionic-angular/umd";

export interface Draw {
    code: string;
    date: DateTime;
    description: string;
    kickoff: DateTime;
    status: string;
}