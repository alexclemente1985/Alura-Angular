import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-photo-frame',
  templateUrl: './photo-frame.component.html',
  styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit{
  @Input() description = '';
  @Input() src = '';
  @Input() likes = 0;
  @Output() liked: EventEmitter<void> = new EventEmitter();

  private debounceSubject: Subject<void> = new Subject();

  unsubscriber$: Subject<void> = new Subject();

  ngOnInit(): void{
    this.debounceSubject.asObservable()
    .pipe(
      debounceTime(500),
      takeUntil(this.unsubscriber$)
      )
    .subscribe(()=> this.liked.emit())
  }

  like(): void{
    this.debounceSubject.next();
  }

  ngOnDestroy(): void{
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }

}
