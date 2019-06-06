import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteeeComponent } from './testeee.component';

describe('TesteeeComponent', () => {
  let component: TesteeeComponent;
  let fixture: ComponentFixture<TesteeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
