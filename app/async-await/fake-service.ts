export class FakeService {
  getValue() {
    return new Promise<number>((res, rej) => {
      const timeout = getRandomInt(500, 2000);
      const value = getRandomInt(0, 100);

      setTimeout(() => {
        res(value);
      }, timeout);
    });
  }

  multiply(a: number, b: number) {
    return new Promise<number>((res, rej) => {
      const timeout = getRandomInt(500, 2000);

      setTimeout(() => {
        res(a * b);
      }, timeout);
    });
  }
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
