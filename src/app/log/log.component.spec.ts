import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LogComponent } from './log.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'angular2-moment/moment.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('LogComponent', () => {
  let component: LogComponent;
  let fixture: ComponentFixture<LogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LogComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: '', component: LogComponent }]
        ),
        MomentModule,
        HttpClientTestingModule
      ],
      // roviders: [ProjectService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
