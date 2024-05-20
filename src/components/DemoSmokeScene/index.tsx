"use client";

import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { useSceneSettings } from "@/hooks/useSceneSettings";
import { CameraUpdate } from "../CameraUpdate";
import { DemoSmoke } from "../DemoSmoke";
import { Footer } from "@/components/Footer";

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

      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
        }}
      >
        <Footer />
      </div>
    </main>
  );
};
