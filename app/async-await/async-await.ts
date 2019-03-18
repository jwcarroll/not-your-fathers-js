import { console } from "console";
import { FakeService } from "./fake-service.js";

var svc = new FakeService();

async function computeProductAsync() {
  const a = await svc.getValue();
  const b = await svc.getValue();
  const product = await svc.multiply(a, b);

  console.log(`${a} * ${b} = ${product}`);
}

console.log('Fetching values...');

computeProductAsync()
  .then(() => {
    console.log('[finished]');
  });
