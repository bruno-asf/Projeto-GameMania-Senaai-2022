import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaixasomComponent } from './caixasom.component';

describe('CaixasomComponent', () => {
  let component: CaixasomComponent;
  let fixture: ComponentFixture<CaixasomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaixasomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaixasomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
