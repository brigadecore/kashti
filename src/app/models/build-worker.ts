export interface BuildWorker {
  id: string;
  build_id: string;
  project_id: string;
  start_time: string;
  end_time: string;
  exit_code: number;
  status: string;
}
