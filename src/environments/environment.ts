import { MockBuildService } from '../app/services/build/mock-build.service';
import { MockJobService } from '../app/services/job/mock-job.service';
import { MockLogService } from '../app/services/log/mock-log.service';
import { MockProjectService } from '../app/services/project/mock-project.service';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  routeDebugging: true,

  buildServiceType: MockBuildService,
  projectServiceType: MockProjectService,
  jobServiceType: MockJobService,
  logServiceType: MockLogService
};
