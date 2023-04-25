import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { UniqueServiceId } from './shared/services/unique-id/unique-id.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LikeWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
