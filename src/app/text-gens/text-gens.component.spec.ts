import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextGensComponent } from './text-gens.component';

describe('TextGensComponent', () => {
  let component: TextGensComponent;
  let fixture: ComponentFixture<TextGensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextGensComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextGensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
