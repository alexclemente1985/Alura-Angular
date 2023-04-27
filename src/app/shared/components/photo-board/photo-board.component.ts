import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Photo } from '../../interfaces/photo';

@Component({
  selector: 'app-photo-board',
  templateUrl: './photo-board.component.html',
  styleUrls: ['./photo-board.component.scss']
})
export class PhotoBoardComponent implements OnChanges{
  @Input() public photos: Photo[] | null = [];
  public rows: any[][] = [];

  constructor(){}

  public ngOnChanges(changes: SimpleChanges): void {
    if(changes['photos']){
      this.rows = this.groupColumns(changes['photos'].currentValue)
    }
  }
  private groupColumns(ph: Photo[]): any[][] {
    const newRows = [];
    const step = 4;

    if(ph){
      for(let index = 0; index < ph.length; index += 4){
        newRows.push(ph.slice(index, index+step));
      }
    }
    
    
    return newRows;
  }
}
