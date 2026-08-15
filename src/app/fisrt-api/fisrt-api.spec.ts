import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FisrtAPI } from './fisrt-api';

describe('FisrtAPI', () => {
  let component: FisrtAPI;
  let fixture: ComponentFixture<FisrtAPI>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FisrtAPI],
    }).compileComponents();

    fixture = TestBed.createComponent(FisrtAPI);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
