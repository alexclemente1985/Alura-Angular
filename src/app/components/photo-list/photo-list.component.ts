import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from 'src/app/shared/interfaces/photo';
import { PhotoBoardService } from 'src/app/shared/services/photo-board/photo-board.service';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent {
  title = 'testes avançados';
  public photos$!: Observable<Photo[]>;
  public fa = { faCircleNotch }

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
