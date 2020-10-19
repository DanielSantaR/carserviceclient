import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersEditComponent } from './owners-edit.component';

describe('OwnersEditComponent', () => {
  let component: OwnersEditComponent;
  let fixture: ComponentFixture<OwnersEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnersEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnersEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
