import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardService } from '../../services/photo-board/photo-board.service';


@NgModule({
  declarations: [PhotoBoardComponent],
  imports: [
    CommonModule,
    PhotoFrameModule
  ],
  providers: [
    PhotoBoardService
  ],
  exports: [
    PhotoBoardComponent
  ]
})
export class PhotoBoardModule { }
