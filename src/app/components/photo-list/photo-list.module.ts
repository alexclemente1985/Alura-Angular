import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoListComponent } from './photo-list.component';
import { PhotoBoardModule } from 'src/app/shared/components/photo-board/photo-board.module';
import { HttpClient } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    PhotoBoardModule,
    FontAwesomeModule
  ],
  exports: [
    PhotoListComponent
  ],
  providers: [
    HttpClient
  ]
})
export class PhotoListModule { }
