import { Pipe, PipeTransform } from '@angular/core';
import {Build} from '../../models/Build';

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

    // prevent magic numbers ...
    const equivalent = 0;
    const before = -1;
    const after = 1;

    // if both builds have no workers they are "equivalent" since they both have been recently
    // started
    if (!b1.worker && !b1.worker) {
      return equivalent;
    }

    // if the the first build has no worker it is more recent than the second build
    if (!b1.worker) {
      return before;
    }

    // if the the second build has no worker it is more recent than the second build
    if (!b2.worker) {
      return after;
    }

    // we are sorting by start date
    const startB1 = new Date(b1.worker.start_time).getTime();
    const startB2 = new Date(b2.worker.start_time).getTime();

    if (startB1 === startB2) {
      return equivalent;
    }

    // smaller number in unix timestamp, the smaller the earlier ...
    if (startB1 < startB2) {
      return after;
    }
    return before;
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

    let orderedList = builds.sort((b1, b2) => {
      return SortBuildByStartDatePipe.compare(b1, b2);
    });

    if (desc) {
      orderedList = orderedList.reverse();
    }

    return orderedList;
  }

}
