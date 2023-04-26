import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GelblasterComponent } from './gelblaster.component';

describe('GelblasterComponent', () => {
  let component: GelblasterComponent;
  let fixture: ComponentFixture<GelblasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GelblasterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GelblasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
