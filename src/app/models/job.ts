
// same as in https://github.com/brigadecore/brigade/blob/master/pkg/brigade/job.go
export enum JobStatus {
  // JobPending means the job has been accepted by the system, but one or more of the containers
  // has not been started. This includes time before being bound to a node, as well as time spent
  // pulling images onto the host.
  Pending = 'Pending',

  // JobRunning means the job has been bound to a node and all of the containers have been started.
  // At least one container is still running or is in the process of being restarted.
  Running = 'Running',

  // JobSucceeded means that all containers in the job have voluntarily terminated
  // with a container exit code of 0, and the system is not going to restart any of these containers.
  Succeeded = 'Succeeded',

  // JobFailed means that all containers in the job have terminated, and at least one container has
  // terminated in a failure (exited with a non-zero exit code or was stopped by the system).
  Failed = 'Failed',

  // JobUnknown means that for some reason the state of the job could not be obtained, typically due
  // to an error in communicating with the host of the job.
  Unknown = 'Unknown'
}

export interface Job {
  id: string;
  name: string;
  image: string;
  creation_time: string;
  start_time: string;
  end_time: string;
  exit_code: number;
  status: JobStatus;
}
