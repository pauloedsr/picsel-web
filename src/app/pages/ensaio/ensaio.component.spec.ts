import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsaioComponent } from './ensaio.component';

describe('EnsaioComponent', () => {
  let component: EnsaioComponent;
  let fixture: ComponentFixture<EnsaioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnsaioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnsaioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
