import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidaModalComponent } from './comida-modal.component';

describe('ComidaModalComponent', () => {
  let component: ComidaModalComponent;
  let fixture: ComponentFixture<ComidaModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComidaModalComponent]
    });
    fixture = TestBed.createComponent(ComidaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
