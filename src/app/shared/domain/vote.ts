import { Collegue } from "./collegue";
export class Vote {
  constructor(
    public avis: string,
    public date: Date,
    public collegue: Collegue
  ) {}
}
