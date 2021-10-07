import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCasesCovidComponent } from './top-cases-covid.component';

describe('TopCasesCovidComponent', () => {
  let component: TopCasesCovidComponent;
  let fixture: ComponentFixture<TopCasesCovidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopCasesCovidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCasesCovidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
