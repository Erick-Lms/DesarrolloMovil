import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransferenciaModalPage } from './transferencia-modal.page';

describe('TransferenciaModalPage', () => {
  let component: TransferenciaModalPage;
  let fixture: ComponentFixture<TransferenciaModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TransferenciaModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
