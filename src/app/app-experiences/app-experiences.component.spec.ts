import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppExperiencesComponent } from './app-experiences.component';

describe('AppExperiencesComponent', () => {
  let component: AppExperiencesComponent;
  let fixture: ComponentFixture<AppExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppExperiencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
