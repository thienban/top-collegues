import { Component } from "@angular/core";
import { Collegue } from "./shared/domain/collegue";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  collegues: Collegue[];
  ngOnInit() {
    this.collegues = [];
    let clement = new Collegue(
      "Clement",
      "http://static1.puretrend.com/articles/5/14/98/15/@/1643505-si-leonardo-dicaprio-songe-a-fonder-une-950x0-8.jpg",
      100
    );
    this.collegues.push(clement);
    let sandra = new Collegue(
      "Sandra",
      "http://static.cotemaison.fr/medias_8908/w_535,h_233,c_crop,x_110,y_9/w_1520,h_855,c_fill,g_north/v1393419594/maison-personne-agee_4561004.jpg",
      100
    );
    this.collegues.push(sandra);
    let melodie = new Collegue("Melodie", "https://thumbs.dreamstime.com/b/portrait-de-tendresse-de-gr%C3%A2ce-de-m%C3%A9lodie-et-de-plastique-de-fille-gymnastique-64631069.jpg", 100);
    this.collegues.push(melodie);
    let alexandre = new Collegue(
      "Alexandre",
      "https://tse2.mm.bing.net/th?id=OIP.9eUlO7BBG9s67fwcR1RVrAHaFA&pid=Api",
      100
    );
    this.collegues.push(alexandre);
    let assia = new Collegue(
      "asia",
      "https://tse1.mm.bing.net/th?id=OIP.IOYTHVqVxr_r28lDP1qEoAHaI6&pid=Api",
      100
    );
    this.collegues.push(assia);
    let momo = new Collegue(
      "Mohammed",
      "http://i.huffpost.com/gen/3973104/images/o-MOHAMMED-VI-facebook.jpg",
      100
    );
    this.collegues.push(momo);
    let yves = new Collegue(
      "Yves",
      "http://img.20mn.fr/ySHSTNchTxC97i5fR7UBcw/2048x1536-fit_yves-koh-lanta.jpg",
      100
    );
    this.collegues.push(yves);
    let tb = new Collegue(
      "Thien-Ban",
      "https://media.laodong.vn/Storage/NewsPortal/2017/9/21/565894/326_Bui-Ly-Thien-Huo.jpg",
      100
    );
    this.collegues.push(tb);
  }
  add(pseudo: HTMLInputElement, imageUrl: HTMLInputElement) {
    //ajouter au tableau un nouveau
    let collegueNew = new Collegue(pseudo.value, imageUrl.value, 100);
    this.collegues.push(collegueNew);
    alert("Le collègue " + pseudo.value + " a été ajouté avec succès !");
    //vider les champs
    pseudo.value = "";
    imageUrl.value = "";
    return false;
  }
}
