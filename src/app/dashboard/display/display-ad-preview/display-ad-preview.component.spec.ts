import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DisplayAdPreviewComponent } from './display-ad-preview.component';

describe('DisplayAdPreviewComponent', () => {
  let component: DisplayAdPreviewComponent;
  let fixture: ComponentFixture<DisplayAdPreviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAdPreviewComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DisplayAdPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
