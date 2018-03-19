import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { MomentModule } from 'angular2-moment/moment.module';

import { ProjectComponent } from './project.component';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let project;

  project = {
    id: 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
    name: 'kashti/localdev',
    repo: {
      name: 'github.com/kashti/localdev',
      cloneURL: 'https://github.com/kashti/localdev.git'
    },
    defaultScript: '',
    kubernetes: {
      namespace: 'default',
      vcsSidecar: '',
      buildStorageSize: '50Mi'
    },
    github: {
      baseURL: '',
      uploadURL: ''
    },
    secrets: {},
    worker: {
      registry: '',
      name: '',
      tag: '',
      pullPolicy: ''
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectComponent ],
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: '', component: ProjectComponent }]
        ),
        MomentModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useValue: {snapshot: {data: {'project': project}}}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create when project data is available', () => {
    expect(component).toBeTruthy();
  });

  it('should create when no project data is available', () => {
    project = {};
    expect(component).toBeTruthy();
  });
});
