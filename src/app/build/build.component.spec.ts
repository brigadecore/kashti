import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { BuildComponent } from './build.component';

describe('BuildComponent', () => {
  let component: BuildComponent;
  let fixture: ComponentFixture<BuildComponent>;

  const build = {
    'id': 'hello-1514014324104-master',
    'name': 'hello',
    'image': 'alpine:3.6',
    'creation_time': '2017-12-23T07:32:04Z',
    'start_time': '2017-12-23T07:32:05Z',
    'end_time': '2017-12-23T07:32:22Z',
    'exit_code': 0,
    'status': 'Succeeded'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BuildComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: '', component: BuildComponent }]
        ),
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: { snapshot: { data: { 'build': build } } }
      }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
