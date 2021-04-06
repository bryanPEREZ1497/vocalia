import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolesTarjetasComponent } from './goles-tarjetas.component';

describe('GolesTarjetasComponent', () => {
  let component: GolesTarjetasComponent;
  let fixture: ComponentFixture<GolesTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolesTarjetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolesTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
