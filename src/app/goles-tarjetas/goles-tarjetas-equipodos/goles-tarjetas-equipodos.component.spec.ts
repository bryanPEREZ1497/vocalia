import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolesTarjetasEquipodosComponent } from './goles-tarjetas-equipodos.component';

describe('GolesTarjetasEquipodosComponent', () => {
  let component: GolesTarjetasEquipodosComponent;
  let fixture: ComponentFixture<GolesTarjetasEquipodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolesTarjetasEquipodosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GolesTarjetasEquipodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
