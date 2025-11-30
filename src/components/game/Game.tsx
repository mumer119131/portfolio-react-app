import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { useBox, useSphere, Physics, usePlane } from '@react-three/cannon';
import * as THREE from 'three';

const Ground = () => {
  const [ref] = usePlane(() => ({
    position: [0, -0.5, 0],
    rotation: [-Math.PI / 2, 0, 0],
    type: 'Static',
  }));

  return (
    <mesh ref={ref as any} receiveShadow>
      <planeGeometry args={[100, 100]} />
      <meshStandardMaterial color="lightgreen" />
    </mesh>
  );
};

interface SphereCharacterProps {
  cameraRef: React.RefObject<THREE.Camera>;
}

const SphereCharacter: React.FC<SphereCharacterProps> = ({ cameraRef }) => {
  const [isJumping, setIsJumping] = useState(false);
  const [velocityY, setVelocityY] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
  });

  const rotation = useRef({ x: 0, y: 0 });

  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: [0, 1, 0],
    args: [1],
    type: 'Dynamic',
    onCollide: (e: any) => console.log('Collided with:', e),
  }));

  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    setMovement((prev) => ({
      ...prev,
      forward: key === 'w' || prev.forward,
      backward: key === 's' || prev.backward,
      left: key === 'a' || prev.left,
      right: key === 'd' || prev.right,
    }));
    if (key === ' ') {
      setIsJumping(true);
    }
    if (key === 'shift') {
      setIsRunning(true);
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    const key = e.key.toLowerCase();
    if (key === 'shift') {
      setIsRunning(false);
    }
    setMovement((prev) => ({
      ...prev,
      forward: key === 'w' ? false : prev.forward,
      backward: key === 's' ? false : prev.backward,
      left: key === 'a' ? false : prev.left,
      right: key === 'd' ? false : prev.right,
    }));
  };

  const handleMouseMove = (e: MouseEvent) => {
    rotation.current.y -= e.movementX * 0.002;
    rotation.current.x -= e.movementY * 0.002;
    rotation.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotation.current.x));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const handleClick = () => {
      document.body.requestPointerLock();
    };
    document.body.addEventListener('click', handleClick);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      document.body.removeEventListener('click', handleClick);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (!ref.current || !cameraRef.current) return;

    const position = ref.current.position;
    let currentSpeed = isRunning ? 10 : 5;
    let force: [number, number, number] = [0, 0, 0];

    if (movement.forward) {
      force[0] += Math.sin(rotation.current.y) * currentSpeed;
      force[2] += Math.cos(rotation.current.y) * currentSpeed;
    }
    if (movement.backward) {
      force[0] -= Math.sin(rotation.current.y) * currentSpeed;
      force[2] -= Math.cos(rotation.current.y) * currentSpeed;
    }
    if (movement.left) {
      force[0] += Math.cos(rotation.current.y) * currentSpeed;
      force[2] -= Math.sin(rotation.current.y) * currentSpeed;
    }
    if (movement.right) {
      force[0] -= Math.cos(rotation.current.y) * currentSpeed;
      force[2] += Math.sin(rotation.current.y) * currentSpeed;
    }

    api.applyForce(force, [0, 0, 0]);

    if (isJumping && Math.abs(velocityY) < 0.01) {
      setVelocityY(5);
      setIsJumping(false);
    }
    api.velocity.set(force[0], velocityY, force[2]);

    setVelocityY((prev) => prev - 0.01);

    const offset = 5;
    const verticalOffset = 3;

    cameraRef.current.position.set(
      position.x - Math.sin(rotation.current.y) * offset,
      position.y + verticalOffset,
      position.z - Math.cos(rotation.current.y) * offset
    );
    cameraRef.current.lookAt(position.x, position.y + 1, position.z);
    ref.current.rotation.y = rotation.current.y;
  });

  return (
    <mesh ref={ref as any} castShadow receiveShadow>
      <sphereGeometry args={[1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

interface RandomObjectProps {
  position: [number, number, number];
  color: string;
  geometry: JSX.Element;
}

const RandomObject: React.FC<RandomObjectProps> = ({ position, color, geometry }) => {
  const size = Math.random() * 1.5 + 0.5;
  const sphereRef = useSphere(() => ({
    mass: 1,
    position,
    args: [size / 2],
  }))[0];
  const boxRef = useBox(() => ({
    mass: 1,
    position,
    args: [size, size, size],
  }))[0];
  const ref = (geometry as any).type?.name === 'SphereGeometry' ? sphereRef : boxRef;

  return (
    <mesh ref={ref as any} castShadow receiveShadow>
      {geometry}
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const WorldObjects = () => {
  const objects = [];

  for (let i = 0; i < 50; i++) {
    const x = Math.random() * 100 - 50;
    const z = Math.random() * 100 - 50;
    const y = 0.5;

    const size = Math.random() * 1.5 + 0.5;
    const color = ['brown', 'gray', 'darkgreen'][Math.floor(Math.random() * 3)];
    const geometry =
      Math.random() > 0.5 ? (
        <boxGeometry args={[size, size, size]} />
      ) : (
        <sphereGeometry args={[size / 2, 16, 16]} />
      );

    objects.push(
      <RandomObject key={`${x}-${z}`} position={[x, y, z]} color={color} geometry={geometry} />
    );
  }

  return <>{objects}</>;
};

const Game: React.FC = () => {
  const cameraRef = useRef<THREE.Camera>(null!);

  return (
    <Canvas
      shadows
      camera={{ position: [0, 5, -10], fov: 50 }}
      onCreated={({ camera }) => ((cameraRef as any).current = camera)}
    >
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 10, 5]} castShadow />
      <Sky sunPosition={[100, 20, 100]} />
      <Physics>
        <Ground />
        <WorldObjects />
        <SphereCharacter cameraRef={cameraRef} />
      </Physics>
    </Canvas>
  );
};

export default Game;
