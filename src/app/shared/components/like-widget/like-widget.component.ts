import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {faThumbsUp} from '@fortawesome/free-solid-svg-icons'
import { UniqueServiceId } from '../../services/unique-id/unique-id.service';

@Component({
  selector: 'app-like-widget',
  templateUrl: './like-widget.component.html',
  styleUrls: ['./like-widget.component.scss']
})
export class LikeWidgetComponent implements OnInit{
  @Input() public id = null as unknown as string;
  @Input() public likes = 0;
  @Output() public liked = new EventEmitter<void>();

  public fonts = {faThumbsUp}

  constructor(private uniqueServiceId: UniqueServiceId){}

  ngOnInit(): void {
    if(!this.id){
      this.id = this.uniqueServiceId.generatedUniqueIdWithPrefix('like-widget');
    }
  }

  public like(): void{
    this.liked.emit();
  }
}
