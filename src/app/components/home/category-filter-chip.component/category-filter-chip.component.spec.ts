import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterChipComponent } from './category-filter-chip.component';

describe('CategoryFilterChipComponent', () => {
  let component: CategoryFilterChipComponent;
  let fixture: ComponentFixture<CategoryFilterChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryFilterChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryFilterChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
