import { lazy, Suspense } from 'react';
import Loading from './Loading';
import PermissionDenied from './PermissionDenied';

type LazyLoadType = (
  importFunc: () => Promise<any>,
  access: boolean,
  url: string
) => JSX.Element;

const LazyLoad: LazyLoadType = (importFunc, access = true, url) => {
  if (!access) {
    return <PermissionDenied url={url}></PermissionDenied>;
  }

  // const LazyComponent = lazy(() => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(importFunc());
  //     }, 1000);
  //   });
  // });

  const LazyComponent = lazy(() => importFunc());

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoad;
