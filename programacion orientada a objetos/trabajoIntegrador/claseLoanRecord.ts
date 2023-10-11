
import { FileManager } from "./claseFileManager";

export class LoanRecord {
    private userName: string;
    private loanTitle: string;
    private dueDate: Date;
    private loanDate: Date;

    constructor(userName: string, loanTitle: string, dueDate: Date, loanDate: Date) {
        this.userName = userName;
        this.loanTitle = loanTitle;
        this.loanDate = loanDate;
        this.dueDate = dueDate;
    }

    getUserName(): string {
        return this.userName;
    }

    getLoanTitle(): string {
        return this.loanTitle;
    }
    getLoanDate(): Date {
        return this.loanDate; 
    }
    getDueDate(): Date {
        return this.dueDate;
    }
}





