export class Kubernetes {
  constructor(
    public namespace: string,
    public vcsSidecar: string,
    public buildStorageSize: string
  ) {}
}

export class Github {
  constructor(
    public baseURL: string,
    public uploadURL: string
  ) {}
}

export class Project {
  constructor(
    public id: string,
    public name: string,
    public repo: Repo,
    public defaultScript: any,
    public kubernetes: Kubernetes,
    public github: Github,
    public secrets: any,
    public worker: Worker
  ) {}
}

export class Repo {
  constructor(
    public name: string,
    public cloneURL: string
  ) {}
}

export class Revision {
  constructor(
    public commit: string,
    public ref: string
  ) {}
}

export class Build {
  constructor(
    public id: string,
    public project_id: string,
    public type: string,
    public provider: string,
    public revision: Revision,
    public payload: string,
    public script: string,
    public buildWorker: BuildWorker
  ) {}
}

export class Worker {
  constructor(
    public registry: string,
    public name: string,
    public tag: string,
    public pullPolicy: string
  ) {}
}

export class BuildWorker {
  constructor(
    public id: string,
    public build_id: string,
    public project_id: string,
    public start_time: string,
    public end_time: string,
    public exit_code: string,
    public status: string
  ) {}
}

export class LastBuild {
  constructor(
    public id: string,
    public project_id: string,
    public type: string,
    public provider: string,
    public revision: Revision,
    public payload: string,
    public script: string,
    public lastBuildWorker: BuildWorker
  ) {}
}

export class ProjectBuild {
  constructor(
    public project: Project,
    public lastBuild: LastBuild
  ) {}
}

export class Job {
  constructor(
    public id: string,
    public name: string,
    public image: string,
    public creation_time: string,
    public start_time: string,
    public end_time: string,
    public exit_code: string,
    public status: string,
  ) {}
}
