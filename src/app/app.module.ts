import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler, Injectable } from "@angular/core";

import { AppComponent } from "./app.component";

import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://99bc7e47a9aa46058704d81318bba30c@sentry.io/1426993" // this needs to be your own information
});

@Injectable()
export class SentryErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error) {
    Sentry.captureException(error.originalError || error);
    throw error;
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: ErrorHandler, useClass: SentryErrorHandler }],
  bootstrap: [AppComponent]
})

export class AppModule {}