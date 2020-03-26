import mapValues from "lodash/mapValues";
export function fixImagePaths(images) {
  const newPaths = mapValues(images, (v) => v.replace(/^\/dist/, "/dist/"));
  return newPaths;
}
