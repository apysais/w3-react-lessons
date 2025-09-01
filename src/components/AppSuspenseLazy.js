import React, {Suspense, lazy} from "react";

const Cars = lazy(() => import('./AppCarData'));

function AppCarLazyLoad() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cars />
      </Suspense>
    </div>
  );
}

export default AppCarLazyLoad;