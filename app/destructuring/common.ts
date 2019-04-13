export interface Person {
  name: string;
  age?: number;
}

export function getMinMax(...nums: number[]) {
  const min = Math.min(...nums);
  const max = Math.max(...nums);

  return [min, max];
}
