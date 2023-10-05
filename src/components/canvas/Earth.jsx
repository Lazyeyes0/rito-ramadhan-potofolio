import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return <primitive object={earth.scene} scale={2.5} />;
};

const EarthCanvas = () => {
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleMouseHold = (e) => {
    setIsGrabbing(true);
  };
  const handleMouseFree = (e) => {
    setIsGrabbing(false);
  };

  return (
    <Canvas
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [-4, 3, 6], fov: 45, near: 0.1, far: 200 }}
      onMouseDown={handleMouseHold}
      onMouseUp={handleMouseFree}
      className={isGrabbing ? "cursor-grabbing" : "cursor-grab"}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          MinPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
