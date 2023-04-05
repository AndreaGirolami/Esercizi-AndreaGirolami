import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DentroHomeComponent } from './dentro-home.component';

describe('DentroHomeComponent', () => {
  let component: DentroHomeComponent;
  let fixture: ComponentFixture<DentroHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DentroHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DentroHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
