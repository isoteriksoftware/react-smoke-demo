import { useThree } from "@react-three/fiber";
import { SceneSettings } from "../../hooks/useSceneSettings";
import { useEffect, useMemo } from "react";
import { PerspectiveCamera } from "three";
import * as THREE from "three";

export const CameraUpdate = ({
  fov,
  position,
  near,
  far,
  background,
}: SceneSettings["cameraControls"] & SceneSettings["sceneControls"]) => {
  const { camera, scene } = useThree();

  const sceneBackground = useMemo(
    () => new THREE.Color(background),
    [background]
  );

  useEffect(() => {
    if (camera instanceof PerspectiveCamera) {
      camera.fov = fov;
      camera.position.set(...position);
      camera.near = near;
      camera.far = far;
      camera.updateProjectionMatrix();
    }

    scene.background = sceneBackground;
  }, [camera, far, fov, near, position, scene, sceneBackground]);

  return null;
};
