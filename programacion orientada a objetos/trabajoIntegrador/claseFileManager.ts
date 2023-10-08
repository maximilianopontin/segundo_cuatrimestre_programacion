import { LoanRecord } from "./claseLoanRecord";
import * as rs from "readline-sync";
import * as fs from "fs";
//import { MenuManager } from "./menu";
//const manager=new MenuManager();
//manager.menuu();


export class FileManager {
    static readLoans(): LoanRecord[] {
        try {
            const loans = fs.readFileSync("./loanRecords.json", { encoding: "utf8" });
            console.log("lectura de datos satisfatoria");
            return JSON.parse(loans) as LoanRecord[];
        } catch (err) {
            if (err instanceof Error) {
                console.log("error inesperado:", err.message);
            } else {
                console.log("error inesperado:", err);
            }
            return [];
        }

    }

}
