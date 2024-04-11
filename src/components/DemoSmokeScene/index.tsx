"use client";

import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import { Smoke } from "react-smoke";
import { useSceneSettings } from "../../hooks/useSceneSettings";
import { CameraUpdate } from "../CameraUpdate";
import * as THREE from "three";
import { DemoSmoke } from "../DemoSmoke";

export const DemoSmokeScene = () => {
  const {
    cameraControls,
    sceneControls,
    ambientLightControls,
    directionalLightControls,
    smokeControls,
  } = useSceneSettings();

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
        {ambientLightControls.enabled && (
          <ambientLight
            color={ambientLightControls.color}
            intensity={ambientLightControls.intensity}
          />
        )}

        {directionalLightControls.enabled && (
          <directionalLight
            color={directionalLightControls.color}
            intensity={directionalLightControls.intensity}
            position={directionalLightControls.position}
          />
        )}

        <DemoSmoke {...smokeControls} />

        <Stats />
        <CameraUpdate {...cameraControls} {...sceneControls} />
      </Canvas>
    </main>
  );
};
