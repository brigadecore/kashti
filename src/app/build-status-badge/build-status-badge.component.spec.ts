import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildStatusBadgeComponent } from './build-status-badge.component';

describe('BuildStatusBadgeComponent', () => {
  let component: BuildStatusBadgeComponent;
  let fixture: ComponentFixture<BuildStatusBadgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildStatusBadgeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildStatusBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
