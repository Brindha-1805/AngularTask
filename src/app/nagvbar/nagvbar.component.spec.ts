import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NagvbarComponent } from './nagvbar.component';

describe('NagvbarComponent', () => {
  let component: NagvbarComponent;
  let fixture: ComponentFixture<NagvbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NagvbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NagvbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
