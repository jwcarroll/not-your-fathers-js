import _ from "lodash";

export interface Person {
  name: string;
  age?: number;
}

export function getMinMax(...nums: number[]) {
  const min = _.min(nums);
  const max = _.max(nums);

  return [min, max];
}
