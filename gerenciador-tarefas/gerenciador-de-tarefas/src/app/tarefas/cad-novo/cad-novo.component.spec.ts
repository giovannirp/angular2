import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadNovoComponent } from './cad-novo.component';

describe('CadNovoComponent', () => {
  let component: CadNovoComponent;
  let fixture: ComponentFixture<CadNovoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadNovoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
