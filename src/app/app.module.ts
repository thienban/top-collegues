import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from "@angular/common/http";
//Routeur
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { UnCollegueComponent } from "./un-collegue/un-collegue.component";
import { BoutonComponent } from "./bouton/bouton.component";
import { CollegueService } from "./shared/service/collegue.service";
import { ClassiqueComponent } from "./classique/classique.component";
import { TableauComponent } from "./tableau/tableau.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { DetailComponent } from "./detail/detail.component";
import { ScorePipe } from './shared/pipe/score.pipe';

const appRoutes: Routes = [
  { path: "classique", component: ClassiqueComponent },
  { path: "tableau", component: TableauComponent },
  { path: "carrousel", component: CarouselComponent },
  { path: "detail/:pseudo", component: DetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UnCollegueComponent,
    BoutonComponent,
    ClassiqueComponent,
    TableauComponent,
    CarouselComponent,
    DetailComponent,
    ScorePipe
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
