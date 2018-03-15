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
    public commit: string,
    public script: string,
    public worker: Worker
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

export class LastBuild {
  constructor(
    public id: string,
    public project_id: string,
    public type: string,
    public provider: string,
    public revision: Revision,
    public payload: string,
    public script: string,
    public worker: LastBuildWorker
  ) {}
}

export class ProjectBuild {
  constructor(
    public project: Project,
    public lastBuild: LastBuild
  ) {}
}
