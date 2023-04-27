import { HttpClient } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { LikeWidgetComponent } from './shared/components/like-widget/like-widget.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';
import { PhotoFrameModule } from './shared/components/photo-frame/photo-frame.module';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent        
      ],
      imports: [LikeWidgetModule, PhotoFrameModule, AppModule],
      providers: [HttpClient]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'testes avançados'`, () => {
    expect(app.title).toEqual('testes avançados');
  });

  it('should increase likes when like() is requested', () => {
    const originalLikes = app.likes;
    app.like();
    expect(app.likes).toBeGreaterThan(originalLikes);
    expect(app.likes).toBe(originalLikes+1);
  })
});
