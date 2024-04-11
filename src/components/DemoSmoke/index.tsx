import { memo, Suspense, useMemo } from "react";
import { SceneSettings } from "../../hooks/useSceneSettings";
import * as THREE from "three";
import { Smoke } from "react-smoke";

const Component = ({
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
}: SceneSettings["smokeControls"]) => {
  const smokeColor = useMemo(() => new THREE.Color(color), [color]);

  return (
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
        textures={customTexture ? [customTexture] : [`./textures/${texture}`]}
      />
    </Suspense>
  );
};

export const DemoSmoke = memo(Component);
