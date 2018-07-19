import { Pipe, PipeTransform } from '@angular/core';
import { Build } from '../../models/build';

// prevent magic numbers ...
export enum TimeDifference {
  equal = 0,
  before = -1,
  after = 1
}

@Pipe({
  name: 'sortBuildByStartDate'
})
export class SortBuildByStartDatePipe implements PipeTransform {

  /**
   * Compares two builds by their start time or if they haven't been started yet
   * @param {Build} b1
   * @param {Build} b2
   * @returns {number} -1 if b1 is earlier, 0 if b1 and b2 are of the same time and 1 if b1 ist after b2
   */
  static compare(b1: Build, b2: Build): number {

    const workerOneExists = !!b1.worker;
    const workerTwoExists = !!b2.worker;

    // if both builds have no workers they are "equivalent" since they both have been recently
    // started
    if ((!workerOneExists) && (!workerTwoExists)) {
      return TimeDifference.equal;
    }

    // if the the first build has no worker it is more recent than the second build
    if (!workerOneExists) {
      return TimeDifference.before;
    }

    // if the the second build has no worker it is more recent than the second build
    if (!workerTwoExists) {
      return TimeDifference.after;
    }

    // we are sorting by start date
    const startB1 = new Date(b1.worker.start_time).getTime();
    const startB2 = new Date(b2.worker.start_time).getTime();

    if (startB1 === startB2) {
      return TimeDifference.equal;
    }

    // smaller number in unix timestamp, the smaller the earlier ...
    if (startB1 < startB2) {
      return TimeDifference.after;
    }
    return TimeDifference.before;
  }


  /**
   * Sorts a build array by start date (asc by default)
   * @param {Build[]} builds to be sorted
   * @param {boolean} desc if list should be ordered descending (older builds first)
   * @returns {any}
   */
  transform(builds: Build[], desc: boolean): Build[] {
    if (!builds) {
      return undefined;
    }
    const order = desc ? -1 : 1;

    return builds.sort((b1, b2) => {
      return SortBuildByStartDatePipe.compare(b1, b2) * order;
    });
  }

}
