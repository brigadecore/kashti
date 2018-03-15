import { Build } from "../../models/project";
import { Observable } from "rxjs/Observable";
import { BuildService } from "./BuildService";

export class MockBuildService implements BuildService {
    getBuilds(projectId: string): Observable<Build[]> {
        throw new Error("Method not implemented.");
    }
}