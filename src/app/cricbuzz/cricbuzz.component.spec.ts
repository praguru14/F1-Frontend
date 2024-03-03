import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CricbuzzComponent } from './cricbuzz.component';

describe('CricbuzzComponent', () => {
  let component: CricbuzzComponent;
  let fixture: ComponentFixture<CricbuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CricbuzzComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CricbuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
