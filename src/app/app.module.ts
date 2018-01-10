import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { UnCollegueComponent } from './un-collegue/un-collegue.component';
import { BoutonComponent } from './bouton/bouton.component';

@NgModule({
  declarations: [AppComponent, UnCollegueComponent, BoutonComponent],
  imports: [BrowserModule, NgbModule.forRoot()],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
