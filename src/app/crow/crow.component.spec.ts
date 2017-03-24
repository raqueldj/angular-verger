import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowComponent } from './crow.component';

describe('CrowComponent', () => {
  let component: CrowComponent;
  let fixture: ComponentFixture<CrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
