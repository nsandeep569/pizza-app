import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsDataComponent } from './items-data.component';

describe('ItemsDataComponent', () => {
  let component: ItemsDataComponent;
  let fixture: ComponentFixture<ItemsDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
