import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent        
      ],
      imports: [LikeWidgetModule]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    //const fixture = TestBed.createComponent(AppComponent);
    //const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testesAutomaticos'`, () => {
    // fixture = TestBed.createComponent(AppComponent);
    //const app = fixture.componentInstance;
    expect(app.title).toEqual('testesAutomaticos');
  });

  it('should increase likes when like() is requested', () => {
    const originalLikes = app.likes;
    app.like();
    expect(app.likes).toBeGreaterThan(originalLikes);
    expect(app.likes).toBe(originalLikes+1);
  })

  /* it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('testesAutomaticos app is running!');
  }); */
});
