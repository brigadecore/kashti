import { ApiBuildService } from "../app/services/build/ApiBuildService";
import { ApiProjectService } from "../app/services/project/ApiProjectService";

export const environment = {
  production: true,

  buildServiceType: ApiBuildService,
  projectServiceType: ApiProjectService
};
