import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetsMainComponent } from './pets-main.component';

describe('PatesComponent', () => {
  let component: PetsMainComponent;
  let fixture: ComponentFixture<PetsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PetsMainComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PetsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
