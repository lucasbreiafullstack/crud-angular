import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FazendaFormComponent } from './fazenda-form.component';

describe('FazendaFormComponent', () => {
  let component: FazendaFormComponent;
  let fixture: ComponentFixture<FazendaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FazendaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FazendaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
