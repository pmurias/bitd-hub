import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSheetsComponent } from './character-sheets.component';

describe('CharacterSheetsComponent', () => {
  let component: CharacterSheetsComponent;
  let fixture: ComponentFixture<CharacterSheetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSheetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSheetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
