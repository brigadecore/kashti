import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { MomentModule } from 'angular2-moment/moment.module';

import { ProjectComponent } from './project.component';
import { Project } from '../models/Project';
import { Build } from '../models/Build';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let project: Project;
  let builds: Build[];

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
        useValue: {snapshot: {data: {'project': project, builds: builds}}}
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    component = undefined;
  });
  describe('when there is project and build data available', () => {
    beforeEach(() => {
      project = {
        id: 'brigade-1234',
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

      builds = [
        {
          id: '01c0mar8tk6daeabj7fhmcskc6',
          project_id: 'brigade-1234',
          type: 'push',
          provider: 'github',
          revision: {
            commit: '',
            ref: ''
          },
          payload: '',
          script: '',
          worker: {
            id: 'brigade-worker-01c0mar8tk6daeabj7fhmcskc6-ad0703ac',
            build_id: '01c0mar8tk6daeabj7fhmcskc6',
            project_id: 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
            start_time: '2018-02-26T22:57:27Z',
            end_time: '2018-02-26T22:57:35Z',
            exit_code: 1,
            status: 'Failed'
          }
        },
        {
          id: '01c0matkmjpjkrbfcnhfyjerfh',
          project_id: 'brigade-abcd',
          type: 'pull_request',
          provider: 'github',
          revision: {
            commit: '',
            ref: ''
          },
          payload: '',
          script: '',
          worker: {
            id: 'brigade-worker-01c0matkmjpjkrbfcnhfyjerfh-ad0703ac',
            build_id: '01c0matkmjpjkrbfcnhfyjerfh',
            project_id: 'brigade-29d38c7477ecee18e184b69bec354fc350605c51bc16d4dd2b6073',
            start_time: '2017-12-23T07:32:08Z',
            end_time: '2017-12-23T07:32:21Z',
            exit_code: 0,
            status: 'Success'
          }
        }
      ];
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set the project', () => {
      expect(component.project).toEqual(project);
    });

    it('should set the builds', () => {
      expect(component.builds).toEqual(builds);
    });
  });

  describe('when project and build data is unavailable', () => {
    beforeEach(() => {
      project = undefined;
      builds = undefined;
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should create when no project data is available', () => {
      expect(component.project).toBeUndefined();
      expect(component.builds).toBeUndefined();
    });
  });


});
