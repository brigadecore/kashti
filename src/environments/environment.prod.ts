import { ApiBuildService } from '../app/services/build/api-build.service';
import { ApiProjectService } from '../app/services/project/api-project.service';
import { ApiJobService } from '../app/services/job/api-job.service';
import { ApiLogService } from '../app/services/log/api-log.service';

export const environment = {
  production: true,
  routeDebugging: false,

  buildServiceType: ApiBuildService,
  projectServiceType: ApiProjectService,
  jobServiceType: ApiJobService,
  logServiceType: ApiLogService
};
