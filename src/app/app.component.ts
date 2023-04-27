import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './shared/interfaces/photo';
import { PhotoBoardService } from './shared/services/photo-board/photo-board.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testes avançados';
  public photos$!: Observable<Photo[]>;

  constructor(
    private service: PhotoBoardService
  ){ }

  ngOnInit(): void{
    this.photos$ = this.service.getPhotos();
  }

  public likes = 0;

  public like(): void{
    this.likes++;
  }
}
