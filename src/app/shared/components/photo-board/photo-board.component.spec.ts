import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SimpleChange, SimpleChanges } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PhotoBoardComponent } from './photo-board.component';
import { PhotoBoardModule } from './photo-board.module';
import { buildPhotoList } from './test/build-photo-list';

describe(PhotoBoardComponent.name, () => {
  let component: PhotoBoardComponent;
  let fixture: ComponentFixture<PhotoBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhotoBoardComponent ],
      imports: [PhotoBoardModule, HttpClientModule],
      providers: [
        HttpClient
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Should display rows and columns when (@Input photos) has value`,
  () => {
    component.photos = buildPhotoList();

    fixture.detectChanges();

    /**NOTA: ngOnChanges somente é ativado por meio de componente pai...
     * o recurso abaixo foi necessário para forçar sua ativação
     */

    const change: SimpleChanges = {
      photos: new SimpleChange([], component.photos, true)
    }

    component.ngOnChanges(change);

    expect(component.rows.length)
    .withContext('Number of rows')
    .toBe(2);
    expect(component.rows[0].length)
    .withContext("Number of columns from the first row")
    .toBe(4);
    expect(component.rows[0].length)
    .withContext("Number of columns from the second row")
    .toBe(4)
  })
});
