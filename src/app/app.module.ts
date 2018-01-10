import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { UnCollegueComponent } from "./un-collegue/un-collegue.component";
import { BoutonComponent } from "./bouton/bouton.component";
import { CollegueService } from "./shared/service/collegue.service";

@NgModule({
  declarations: [AppComponent, UnCollegueComponent, BoutonComponent],
  imports: [BrowserModule, NgbModule.forRoot(), HttpClientModule],
  providers: [CollegueService],
  bootstrap: [AppComponent]
})
export class AppModule {}
