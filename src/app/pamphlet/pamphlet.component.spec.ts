import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PamphletComponent } from './pamphlet.component';

describe('PamphletComponent', () => {
  let component: PamphletComponent;
  let fixture: ComponentFixture<PamphletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PamphletComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PamphletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
