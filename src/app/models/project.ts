export class Repo {
  constructor(public name: string, public cloneURL: string) {}
}

export class Kubernetes {
  constructor(public namespace: string, public vcsSidecar: string) {}
}

export class Project {
  constructor(
    public id: string,
    public name: string,
    public repo: Repo,
    public kubernetes: Kubernetes,
    public github: any,
    public secrets: any
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
    public id: string,
    public build_id: string,
    public project_id: string,
    public start_time: Date,
    public end_time: Date,
    public exit_code: number,
    public status: string
  ) {}
}

export class LastBuild {
  constructor(
    public id: string,
    public project_id: string,
    public type: string,
    public provider: string,
    public commit: string,
    public payload: string,
    public script: string,
    public worker: Worker
  ) {}
}

export class ProjectBuild {
  constructor(public project: Project, public lastBuild: LastBuild) {}
}
