export interface Job {
  id: string;
  name: string;
  image: string;
  creation_time: string;
  start_time: string;
  end_time: string;
  exit_code: number;
  status: string;
}
