import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { MomentModule } from 'angular2-moment/moment.module';

import { ProjectFactory } from '../tests/project-factory';
import { BuildFactory } from '../tests/build-factory';

import { ProjectComponent } from './project.component';
import { Project } from '../models/Project';
import { Build } from '../models/Build';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let project;
  let builds;

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
      project = ProjectFactory.build({name: 'coffeesnob'});
      builds = BuildFactory.buildList(2);
    });

    it('should create the component', () => {
      expect(component).toBeTruthy();
    });

    it('should set the project', async(() => {
      expect(component.project).toEqual(project);
      expect(fixture.nativeElement.querySelector('h1')
        .textContent).toContain('coffeesnob');
    }));

    it('should set the builds', async(() => {
      expect(component.builds).toEqual(builds);
    }));
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

  describe('CalculateProviderLogoClass', () => {
    let expected;

    describe('when github is the argument', () => {
      beforeEach(() => {
        expected = 'icon ion-logo-github';
      });

      it('returns a github icon', () => {
        expect(component.CalculateProviderLogoClass('github')).toEqual(expected);
      });
    });

    describe('for any other argument', () => {
      beforeEach(() => {
        expected = 'icon ion-logo-tux';
      });

      it('returns a tux icon', () => {
        expect(component.CalculateProviderLogoClass('foo')).toEqual(expected);
        expect(component.CalculateProviderLogoClass('bar')).toEqual(expected);
        expect(component.CalculateProviderLogoClass('baz')).toEqual(expected);
      });
    });
  });
});
