import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'angular2-moment/moment.module';
import { BuildStatusBadgeComponent } from '../build-status-badge/build-status-badge.component';
import { Build } from '../models/build';
import { Project } from '../models/project';
import { SortBuildByStartDatePipe } from '../pipes/builds/sort-build-by-start-date.pipe';
import { BuildFactory } from '../tests/build-factory';
import { ProjectFactory } from '../tests/project-factory';
import { ProjectComponent } from './project.component';

import * as util from 'util';
import { BuildService } from '../services/build/build.service';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let mockProject: Project;
  let mockBuilds: Build[];

  beforeEach(async(() => {
    mockProject = ProjectFactory.build({ name: 'coffeesnob' });
    mockBuilds = BuildFactory.buildList(2, { id: 'coffeebuild' });

    TestBed.configureTestingModule({
      declarations: [
        ProjectComponent,
        BuildStatusBadgeComponent,
        SortBuildByStartDatePipe
      ],
      imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: ProjectComponent }
        ]),
        MomentModule
      ],
      providers: [
        BuildService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: { project: mockProject, builds: mockBuilds } }
          }
        }
      ]
    }).compileComponents();
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
      mockProject = ProjectFactory.build({ name: 'coffeesnob' });
      mockBuilds = BuildFactory.buildList(2, { id: 'coffeebuild' });
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set the project', () => {
      expect(component.project).toEqual(mockProject);
      expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
        'coffeesnob'
      );
    });

    it('should set the builds', () => {
      expect(component.builds).toEqual(mockBuilds);
      const firstBuild = fixture.nativeElement.querySelector('.build-item');
      expect(firstBuild.textContent).toContain('coffeebuild');
    });

    it('should detect changes upstream and update the component elements', () => {
      component.project.name = 'newsnob';
      component.builds[0].id = 'newcoffeebuild';
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('h1').textContent).toContain(
        'newsnob'
      );
      const buildElement = fixture.nativeElement.querySelector('.build-item');
      expect(buildElement.textContent).toContain('newcoffeebuild');
    });
  });

  describe('when project and build data is unavailable', () => {
    beforeEach(() => {
      mockProject = undefined;
      mockBuilds = undefined;
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    // TODO - Radu M
    //
    // this text fixture is generating some flaky results

    // it("should create when no project data is available", () => {
    //   expect(component.project).toBeUndefined();
    //   expect(component.builds).toBeUndefined();
    // });
  });
});
