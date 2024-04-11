"use client";

import { Canvas } from "@react-three/fiber";
import { Stats } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import { Smoke } from "react-smoke";
import { useSceneSettings } from "../../hooks/useSceneSettings";
import { CameraUpdate } from "../CameraUpdate";
import * as THREE from "three";

export const DemoSmokeScene = () => {
  const {
    cameraControls,
    sceneControls,
    ambientLightControls,
    directionalLightControls,
    smokeControls,
  } = useSceneSettings();

  const {
    color,
    opacity,
    density,
    enableFrustumCulling,
    enableTurbulence,
    turbulenceStrength,
    enableWind,
    windStrength,
    windDirection,
    enableRotation,
    rotation,
    maxVelocity,
    velocityResetFactor,
    size,
    minBounds,
    maxBounds,
    castShadow,
    receiveShadow,
    texture,
    customTexture,
  } = smokeControls;

  const smokeColor = useMemo(() => new THREE.Color(color), [color]);

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

        <Suspense fallback={null}>
          <Smoke
            color={smokeColor}
            opacity={opacity}
            density={density}
            enableFrustumCulling={enableFrustumCulling}
            enableTurbulence={enableTurbulence}
            turbulenceStrength={turbulenceStrength}
            enableWind={enableWind}
            windStrength={windStrength}
            windDirection={windDirection}
            enableRotation={enableRotation}
            rotation={rotation}
            maxVelocity={maxVelocity}
            velocityResetFactor={velocityResetFactor}
            size={size}
            minBounds={minBounds}
            maxBounds={maxBounds}
            castShadow={castShadow}
            receiveShadow={receiveShadow}
            textures={
              customTexture ? [customTexture] : [`./textures/${texture}`]
            }
          />
        </Suspense>

        <Stats />
        <CameraUpdate {...cameraControls} {...sceneControls} />
      </Canvas>
    </main>
  );
};
