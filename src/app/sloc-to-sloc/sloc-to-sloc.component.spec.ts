import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlocToSlocComponent } from './sloc-to-sloc.component';

describe('SlocToSlocComponent', () => {
  let component: SlocToSlocComponent;
  let fixture: ComponentFixture<SlocToSlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlocToSlocComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlocToSlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
