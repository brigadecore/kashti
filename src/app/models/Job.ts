export interface Job {
  id: string;
  name: string;
  image: string;
  creation_time: Date;
  start_time: Date;
  end_time: Date;
  exit_code: number;
  status: string;
}
