"use client";

import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { Suspense } from "react";
import { Smoke } from "react-smoke";

export const DemoSmokeScene = () => {
  return (
    <main
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Canvas>
        <Suspense fallback={null}>
          <Smoke />
        </Suspense>

        <Stats />
      </Canvas>
    </main>
  );
};
