import { Collegue } from "./collegue";
export class Commentaire {
  constructor(public commentaire: string, public collegue: Collegue) {}
  public date: Date;
}
