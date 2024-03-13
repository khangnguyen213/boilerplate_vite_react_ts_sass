import { lazy, Suspense } from 'react';
import Loading from './Loading';
import PermissionDenied from './PermissionDenied';

const LazyLoad = (importFunc, access = true, url) => {
  // const LazyComponent = lazy(() => {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(importFunc());
  //     }, 1000);
  //   });
  // });

  if (!access) {
    return <PermissionDenied url={url}></PermissionDenied>;
  }
  const LazyComponent = lazy(() => importFunc());

  return (
    <Suspense fallback={<Loading />}>
      <LazyComponent />
    </Suspense>
  );
};

export default LazyLoad;
