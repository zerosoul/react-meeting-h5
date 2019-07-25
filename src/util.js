import { lazy } from "react";

const lazyImport = path => {
  const paths = path.split("/");
  // eslint-disable-next-line no-unused-vars
  const ChunkName = paths.filter(p => p.indexOf(".") === -1).join("-");
  console.log("path", path, ChunkName);

  return lazy(() => import(/* webpackChunkName: `${ChunkName}` */ path));
};
export { lazyImport };
