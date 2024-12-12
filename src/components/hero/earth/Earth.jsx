import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import earth_model from "../../../assets/models/bee.glb";

const My3DModelWithAnimation = () => {
  const modelRef = useRef(null);
  const { scene, animations } = useGLTF(earth_model); // Load model and animations
  const { actions, mixer } = useAnimations(animations, modelRef);

  useEffect(() => {
    const model = modelRef.current;
    if (model) {
      // Set initial position and rotation
      model.rotation.set(0, 81, 0); // Initial rotation
      model.position.set(0, -2, -1); // Initial position

      // GSAP Animation: Move the model around in a circular path
      gsap.to(model.position, {
        y: 2, // Move to the left
        x: -2, // Move to the right
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(model.rotation, {
        y: 187, // Rotate 360 degrees
        duration: 3,
        reversed: 1,
        repeat: -1,
        ease: "linear",
      });

      // Play animations if available
      if (actions && animations.length > 0) {
        actions[animations[0].name]?.play();
      }
    }

    return () => {
      // Cleanup: Stop GSAP animations and Three.js mixer
      gsap.killTweensOf(model.position);
      gsap.killTweensOf(model.rotation);
      mixer.stopAllAction();
    };
  }, [actions, animations, mixer]);

  return <primitive ref={modelRef} object={scene} scale={0.05} />;
};

const ThreeDViewer = () => {
  return (
    <Canvas className="overflow-visible left-0">
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <My3DModelWithAnimation />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
    </Canvas>
  );
};

export default ThreeDViewer;
