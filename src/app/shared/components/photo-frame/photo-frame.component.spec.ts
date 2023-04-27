import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { LikeWidgetModule } from '../like-widget/like-widget.module';

import { PhotoFrameComponent } from './photo-frame.component';

describe('PhotoFrameComponent', () => {
  let component: PhotoFrameComponent;
  let fixture: ComponentFixture<PhotoFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoFrameComponent ],
      imports: [
        LikeWidgetModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoFrameComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`#${PhotoFrameComponent.prototype.like.name}
    should trigger (@Output liked) once when called
    multiple times within debounce time`, 
    fakeAsync (() => {
      fixture.detectChanges();
      let times = 0;
      component.liked.subscribe(()=> times++);
      component.like();
      component.like();
      tick(500);
      expect(times).toBe(1);
    })
  );

  it(`#${PhotoFrameComponent.prototype.like.name}
    should trigger (@Output liked) two times when called
    outside debounce time`, 
    fakeAsync (() => {
      fixture.detectChanges();
      let times = 0;
      component.liked.subscribe(()=> times++);
      component.like();
      tick(500);
      component.like();
      tick(500);
      expect(times).toBe(2);
    })
  );
  
  it(`(DOM) Should display number of likes when (@Input likes) is incremented`,
  () => {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('.like-counter');
    expect(element.textContent?.trim()).toBe('1');
  });

  it(`(DOM) Should update aria-label when (@Input likes) is incremented`, 
  ()=> {
    fixture.detectChanges();
    component.likes++;
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('1: people liked');
  });

  it(`(DOM) Should have aria-label with default (@Input likes) value`,
  () => {
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement.querySelector('span');
    expect(element.getAttribute('aria-label')).toBe('0: people liked');
  });

  it(`(DOM) Should display image with src and description when bound to properties`,
  () => {
    const description = 'some description';
    const src = 'http://somesite.com/img.jpg'
    component.src = src;
    component.description = description;
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.nativeElement.querySelector('img');
    expect(img.getAttribute('src')).toBe(src);
    expect(img.getAttribute('alt')).toBe(description);
  })
});
