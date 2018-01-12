import { Pipe, PipeTransform } from "@angular/core";
import { Collegue } from "../domain/collegue";

@Pipe({
  name: "filtre"
})
export class FiltrePipe implements PipeTransform {
  transform(tabCollegues: Collegue[], args?: any): any {
    return tabCollegues
      ? tabCollegues.filter(c => c.pseudo.toLowerCase().includes(args))
      : [];
  }
}
