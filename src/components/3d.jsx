import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}></Suspense>
      <Spline scene="https://prod.spline.design/h5CP4kIW6S71K1B2/scene.splinecode" />
    </>
  );
}

//https://app.spline.design/file/c7658e30-01d7-4a4b-bd15-13315143a1a5// link for splite
