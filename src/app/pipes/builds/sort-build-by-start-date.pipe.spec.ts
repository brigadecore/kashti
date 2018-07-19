import { BuildFactory } from '../../tests/build-factory';
import { SortBuildByStartDatePipe, TimeDifference } from './sort-build-by-start-date.pipe';

describe('SortBuildByStartDatePipe', () => {
  let pipe: SortBuildByStartDatePipe;
  beforeEach(() => {
    pipe = new SortBuildByStartDatePipe();
  });
  it('should create', () => {
    expect(pipe).toBeTruthy();
  });
  it('should not transform if no builds are given', () => {
    const result = pipe.transform(undefined, false);
    expect(result).toBe(undefined);
  });
  it('should not transform a list of equal elements', () => {
    const mockBuilds = BuildFactory.buildList(5, {});
    const result = pipe.transform(mockBuilds, true);
    expect(result).toEqual(mockBuilds);
  });
  it('should compare two builds which have not been started as equal', () => {
    const mockBuild = BuildFactory.build({ worker: undefined });
    const result = SortBuildByStartDatePipe.compare(mockBuild, mockBuild);
    expect(result).toEqual(TimeDifference.equal);
  });
  it('should show the first build to be earlier if it has not been started', () => {
    const mockB1 = BuildFactory.build({ worker: undefined });
    const mockB2 = BuildFactory.build({});
    const result = SortBuildByStartDatePipe.compare(mockB1, mockB2);
    expect(result).toEqual(TimeDifference.before);
  });
  it('should show the second build to be earlier if it has not been started', () => {
    const mockB1 = BuildFactory.build({ worker: undefined });
    const mockB2 = BuildFactory.build({});
    const result = SortBuildByStartDatePipe.compare(mockB2, mockB1);
    expect(result).toEqual(TimeDifference.after);
  });
  it('should compare two builds with equal start time as equal', () => {
    const mockBuild = BuildFactory.build({});
    const result = SortBuildByStartDatePipe.compare(mockBuild, mockBuild);
    expect(result).toEqual(TimeDifference.equal);
  });
  it('should show the first build to be earlier if it\'s start time lies after', () => {
    const mockB1 = BuildFactory.build({});
    mockB1.worker.start_time = '2018-02-26T22:57:27Z';
    const mockB2 = BuildFactory.build({ worker: undefined });
    mockB2.worker = {
      ...mockB1.worker,
      start_time: '2018-02-28T22:57:27Z',
    };
    const result = SortBuildByStartDatePipe.compare(mockB1, mockB2);
    expect(result).toEqual(TimeDifference.after);
  });
  it('should show the first build to be later if it\'s start time lies before', () => {
    const mockB1 = BuildFactory.build({});
    mockB1.worker.start_time = '2018-02-26T22:57:27Z';
    const mockB2 = BuildFactory.build({ worker: undefined });
    mockB2.worker = {
      ...mockB1.worker,
      start_time: '2018-02-21T22:57:27Z',
    };
    const result = SortBuildByStartDatePipe.compare(mockB1, mockB2);
    expect(result).toEqual(TimeDifference.before);
  });
});
