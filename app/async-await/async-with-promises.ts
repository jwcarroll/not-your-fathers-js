import { console } from "console";
import { FakeService } from "./fake-service.js";

var svc = new FakeService();

function computeProductAsync() {
  const p1 = svc.getValue();
  const p2 = svc.getValue();

  return Promise.all([p1, p2])
    .then(([a, b]) => {
      console.log(`${a} * ${b} = [calculating...]`);

      return svc.multiply(a, b);
    })
    .then(product => {
      console.log(product);
    });
}

console.log('Fetching values...');

computeProductAsync()
  .then(() => {
    console.log('[finished]');
  });
