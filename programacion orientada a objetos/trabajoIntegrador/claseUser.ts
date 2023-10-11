//clase destinada a creacion de usuarios, lectores

import { randomUUID as uid } from "node:crypto";//para usarlo tenemos que instalar los tipos de node
import { iAddress } from "./interface";

export class User {
  private id: string = uid();
  private name: string;
  private address: iAddress;
  private phoneNumber: string;
  private scoring: number = 0; //porque no esta penalizado
  private cancelled: boolean = false; // el usuario no esta cancelado
  private penalized: Date | null = null;

  //private isAuthorized: boolean= true; 
  public constructor(name: string, address: iAddress, phoneNumber: string) {
    this.name = name;
    this.address = address;
    this.phoneNumber = phoneNumber;
  }

  public getId(): string {
    return this.id;
  }
  //establece nombre
  public setName(name: string): void {
    this.name = name;
  }
  public getName(): string {
    return this.name;
  }
  public setAddress(address: iAddress): void {
    this.address = address;
  }
  public getAddress(): iAddress //devuelve el objeto iAddress con sus parametros 
  {
    return this.address;
  }
  public setPhoneNumber(phoneNumber: string): void {
    this.phoneNumber = phoneNumber;
  }
  public getPhoneNumber(): string {
    return this.phoneNumber;
  }
  //metodo para modificar los puntos del usuario
  public getScoring(): number {
    return this.scoring;
  }

  public increaseScoring(points: number): void {
    this.scoring += points;
  }
  public decreaseScoring(points: number): void {
    this.scoring -= points;
  }
  public markAsCancelled(): void {
    this.cancelled = true;
  }
  public isCancelled(): boolean {
    return this.cancelled;
  }
  public markAsPenalized(date: Date): void {
    this.penalized = date;
  }
 
  public isPenalized(loanDate: Date = new Date ): boolean {

    if ( this.penalized === null){
      return false;

    }
    const endPenalization = new Date(this.penalized); //crea copia de fecha de peanlizacion //return date
    endPenalization.setDate(endPenalization.getDate() + 7); //fecha de penalizacion mas 7 dias 
    
    if (loanDate < endPenalization) {
      return true;
    } else {
      return false;
    }
    
  }
}