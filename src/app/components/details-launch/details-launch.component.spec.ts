import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsLaunchComponent } from './details-launch.component';

describe('DetailsLaunchComponent', () => {
  let component: DetailsLaunchComponent;
  let fixture: ComponentFixture<DetailsLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsLaunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
