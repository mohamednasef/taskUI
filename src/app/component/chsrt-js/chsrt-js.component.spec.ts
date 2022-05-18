import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChsrtJsComponent } from './chsrt-js.component';

describe('ChsrtJsComponent', () => {
  let component: ChsrtJsComponent;
  let fixture: ComponentFixture<ChsrtJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChsrtJsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChsrtJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
