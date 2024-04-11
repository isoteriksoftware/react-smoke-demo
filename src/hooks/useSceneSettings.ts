import { useControls } from "leva";
import { useMemo } from "react";
import { ThreeAxisValue } from "react-smoke";
import { getSmokeTextures } from "../utils";

export type SceneSettings = {
  smokeControls: {
    color: string;
    opacity: number;
    density: number;
    enableFrustumCulling: boolean;
    enableTurbulence: boolean;
    turbulenceStrength: ThreeAxisValue;
    enableWind: boolean;
    windStrength: ThreeAxisValue;
    windDirection: ThreeAxisValue;
    enableRotation: boolean;
    rotation: ThreeAxisValue;
    maxVelocity: ThreeAxisValue;
    velocityResetFactor: number;
    size: ThreeAxisValue;
    minBounds: ThreeAxisValue;
    maxBounds: ThreeAxisValue;
    castShadow: boolean;
    receiveShadow: boolean;
    texture: string;
    customTexture?: string;
  };
  cameraControls: {
    fov: number;
    position: ThreeAxisValue;
    near: number;
    far: number;
  };
  sceneControls: {
    background: string;
  };
  ambientLightControls: {
    enabled: boolean;
    color: string;
    intensity: number;
  };
  directionalLightControls: {
    enabled: boolean;
    color: string;
    intensity: number;
    position: ThreeAxisValue;
  };
};

export const useSceneSettings = (): SceneSettings => {
  const smokeTextures = useMemo(() => getSmokeTextures(), []);

  const smokeControls = useControls("Smoke", {
    color: "#ff0000",
    opacity: { value: 0.5, min: 0, max: 1 },
    density: { value: 50, min: 1, max: 10000, step: 1 },
    enableFrustumCulling: true,
    enableTurbulence: true,
    turbulenceStrength: {
      value: [0.001, 0.001, 0.001],
      step: 0.001,
      min: -1000,
      max: 1000,
    },
    enableWind: true,
    windStrength: {
      value: [0.001, 0.001, 0.001],
      step: 0.001,
      min: 0,
      max: 1000,
    },
    windDirection: { value: [1, 0, 0], step: 0.001, min: -1, max: 1 },
    enableRotation: true,
    rotation: { value: [0, 0, 0.0011], step: 0.001, min: -1000, max: 1000 },
    maxVelocity: { value: [0.1, 0.1, 0], step: 0.001, min: -1000, max: 1000 },
    velocityResetFactor: { value: 0.001, min: 0, max: 1000, step: 0.001 },
    size: { value: [1000, 1000, 1000], step: 1, min: 1, max: 10000 },
    minBounds: { value: [-800, -800, -800], step: 1, min: -10000, max: 0 },
    maxBounds: { value: [800, 800, 800], step: 1, min: 1, max: 10000 },
    castShadow: false,
    receiveShadow: false,
    texture: {
      options: smokeTextures,
      value: smokeTextures[0],
    },
    customTexture: {
      image: undefined,
    },
  });

  const cameraControls = useControls("Camera", {
    fov: { value: 60, min: 1, max: 180 },
    position: {
      value: [0, 0, 500],
      step: 1,
      min: -1000,
      max: 1000,
    },
    near: { value: 0.1, min: 0.1, max: 1000 },
    far: { value: 6000, min: 10, max: 10000 },
  });

  const sceneControls = useControls("Scene", {
    background: "#000000",
  });

  const ambientLightControls = useControls("Ambient Light", {
    enabled: true,
    color: "#ffffff",
    intensity: { value: 1, min: 0, max: 1 },
  });

  const directionalLightControls = useControls("Directional Light", {
    enabled: true,
    color: "#ffffff",
    intensity: { value: 1, min: 0, max: 1 },
    position: {
      value: [-1, 0, 1],
      step: 1,
      min: -1000,
      max: 1000,
    },
  });

  return {
    smokeControls,
    cameraControls,
    sceneControls,
    ambientLightControls,
    directionalLightControls,
  };
};
