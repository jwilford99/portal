import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayPlacementsComponent } from './display-placements.component';

describe('DisplayPlacementsComponent', () => {
  let component: DisplayPlacementsComponent;
  let fixture: ComponentFixture<DisplayPlacementsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayPlacementsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayPlacementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
