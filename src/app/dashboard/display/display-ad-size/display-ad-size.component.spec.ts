import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayAdSizeComponent } from './display-ad-size.component';

describe('DisplayAdSizeComponent', () => {
  let component: DisplayAdSizeComponent;
  let fixture: ComponentFixture<DisplayAdSizeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAdSizeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayAdSizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
