import { useControls } from "leva";
import { ThreeAxisValue } from "react-smoke";

const smokeTextures = ["default.png"];

for (let i = 0; i <= 24; i++) {
  const suffix = String(i).padStart(2, "0");
  smokeTextures.push(`blackSmoke${suffix}.png`);
}

for (let i = 0; i <= 8; i++) {
  const suffix = String(i).padStart(2, "0");
  smokeTextures.push(`explosion${suffix}.png`);
}

for (let i = 0; i <= 8; i++) {
  const suffix = String(i).padStart(2, "0");
  smokeTextures.push(`fart${suffix}.png`);
}

for (let i = 0; i <= 8; i++) {
  const suffix = String(i).padStart(2, "0");
  smokeTextures.push(`flash${suffix}.png`);
}

for (let i = 0; i <= 24; i++) {
  const suffix = String(i).padStart(2, "0");
  smokeTextures.push(`whitePuff${suffix}.png`);
}

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
};

export const useSceneSettings = (): SceneSettings => {
  const smokeControls = useControls("Smoke", {
    color: "#ffffff",
    opacity: { value: 0.5, min: 0, max: 1 },
    density: { value: 50, min: 1, max: 10000, step: 1 },
    enableFrustumCulling: true,
    enableTurbulence: false,
    turbulenceStrength: {
      value: [0.001, 0.001, 0.001],
      step: 0.001,
      min: -1000,
      max: 1000,
    },
    enableWind: false,
    windStrength: {
      value: [0.001, 0.001, 0.001],
      step: 0.001,
      min: 0,
      max: 1000,
    },
    windDirection: { value: [1, 0, 0], step: 0.001, min: -1, max: 1 },
    enableRotation: false,
    rotation: { value: [0, 0, 0.0011], step: 0.001, min: -1000, max: 1000 },
    maxVelocity: { value: [0.5, 0.5, 0], step: 0.001, min: -1000, max: 1000 },
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
      value: [0, 65, 164],
      step: 1,
      min: -1000,
      max: 1000,
    },
    near: { value: 0.1, min: 0.1, max: 1000 },
    far: { value: 520, min: 1, max: 1000 },
  });

  return {
    smokeControls,
    cameraControls,
  };
};
