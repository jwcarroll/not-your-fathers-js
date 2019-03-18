export function sum(...nums: number[]) {
  return nums.reduce(
    (tot, cur) => tot + cur
    , 0
  );
}

export function nameSum(name: string, ...nums: number[]) {
  const tot = nums.reduce(
    (tot, cur) => tot + cur
    , 0
  );

  return { [name]: tot };
}
