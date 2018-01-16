import { Collegue } from "./collegue";
export class Commentaire {
  constructor(
    public commentaire: string,
    public date: Date,
    public collegue: Collegue
  ) {}
}
