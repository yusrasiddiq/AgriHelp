import React, { Suspense } from "react";

const Spline = React.lazy(() => import("@splinetool/react-spline"));

export default function ThreeD() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      {/* Make the container responsive */}
      <Suspense fallback={<div>Loading...</div>}>
        <div className="w-full h-full max-w-full max-h-[600px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px]">
          <Spline scene="https://prod.spline.design/h5CP4kIW6S71K1B2/scene.splinecode" />
        </div>
      </Suspense>
    </div>
  );
}
