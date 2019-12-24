import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MomentModule } from 'angular2-moment/moment.module';
import { ProjectService } from '../services/project/project.service';
import { DashboardComponent } from './dashboard.component';
import { ProjectsBuild } from '../models/projects-build';
import { LastBuild } from '../models/last-build';
import { JobStatus } from '../models/job';
import { last } from 'rxjs/operators';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [{ path: '', component: DashboardComponent }]
        ),
        MomentModule,
        HttpClientTestingModule
      ],
      providers: [ProjectService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call location.back method if back button is clicked', () => {
    spyOn(component.location, 'back');
    component.backClicked();
    expect(component.location.back).toHaveBeenCalled();
  });

  it('should return true if lastbuild worker is defined', () => {
    const projectsBuild: ProjectsBuild = {
      lastBuild: {
        worker: {
          id: '',
          exit_code: 0,
          project_id: '',
          start_time: undefined,
          status: undefined,
          build_id: undefined,
          end_time: undefined
        },
        id: '',
        payload: undefined,
        project_id: '',
        provider: '',
        revision: undefined,
        script: undefined,
        type: ''
      },
      project: undefined
    };
    expect(component.showStatus(projectsBuild)).toBeTruthy();
  });

  it('should return false if lastbuild worker is not defined', () => {
    const projectsBuild: ProjectsBuild = {
      lastBuild: {
        worker: undefined,
        id: '',
        payload: undefined,
        project_id: '',
        provider: '',
        revision: undefined,
        script: undefined,
        type: ''
      },
      project: undefined
    };
    expect(component.showStatus(projectsBuild)).toBeFalsy();
  });

  it('should calculate correct status classes based on worker status', () => {
    const lastBuild: LastBuild = {
      id: '',
      payload: undefined,
      project_id: '',
      provider: '',
      revision: undefined,
      script: undefined,
      type: undefined,
      worker: undefined
    };
    spyOn(component, 'unknownStateClasses');
    component.calculateStatusClasses(lastBuild);
    expect(component.unknownStateClasses).toHaveBeenCalled();
    lastBuild.worker = {
      build_id: '',
      end_time: '',
      exit_code: 0,
      id: '',
      project_id: '',
      start_time: '',
      status: JobStatus.Succeeded
    };
    spyOn(component, 'successStateClasses');
    component.calculateStatusClasses(lastBuild);
    expect(component.successStateClasses).toHaveBeenCalled();
    lastBuild.worker.status = JobStatus.Failed;
    spyOn(component, 'failureStateClasses');
    component.calculateStatusClasses(lastBuild);
    expect(component.failureStateClasses).toHaveBeenCalled();
    lastBuild.worker.status = JobStatus.Running;
    spyOn(component, 'activeStateClasses');
    component.calculateStatusClasses(lastBuild);
    expect(component.activeStateClasses).toHaveBeenCalled();
    lastBuild.worker.status = JobStatus.Pending;
    component.calculateStatusClasses(lastBuild);
    expect(component.unknownStateClasses).toHaveBeenCalled();
  });
});
