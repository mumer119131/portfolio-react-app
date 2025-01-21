import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sky } from '@react-three/drei';
import { useBox, useSphere, Physics, usePlane } from '@react-three/cannon';

const Ground = () => {
    const [ref] = usePlane(() => ({
      position: [0, -0.5, 0],
      rotation: [-Math.PI / 2, 0, 0],
      type: 'Static', // Set type to 'Static' to make the ground immovable
    }));
  
    return (
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="lightgreen" />
      </mesh>
    );
  };



  const SphereCharacter = ({ cameraRef }) => {
    const [isJumping, setIsJumping] = useState(false);
    const [velocityY, setVelocityY] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [movement, setMovement] = useState({
      forward: false,
      backward: false,
      left: false,
      right: false,
    });
  
    const rotation = useRef({ x: 0, y: 0 }); // Character rotation angles
  
    // Physics body for the sphere (useSphere)
    const [ref, api] = useSphere(() => ({
      mass: 1, // Make it movable
      position: [0, 1, 0], // Initial position
      args: [1], // Radius of the sphere
      type: 'Dynamic', // Dynamic object for movement
      onCollide: (e) => console.log('Collided with:', e),
    }));
  
    // Handle keyboard input
    const handleKeyDown = (e) => {
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
  
    const handleKeyUp = (e) => {
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
  
    // Mouse movement for character rotation
    const handleMouseMove = (e) => {
      rotation.current.y -= e.movementX * 0.002; // Left/right rotation
      rotation.current.x -= e.movementY * 0.002; // Up/down rotation
      rotation.current.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, rotation.current.x)); // Clamp vertical rotation
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
      // Ensure that the ref is properly defined before proceeding
      if (!ref.current || !cameraRef.current) return;
  
      const position = ref.current.position;
  
      // Set speed based on running state
      let currentSpeed = isRunning ? 10 : 5;
  
      // Movement directions
      let force = [0, 0, 0]; // Initialize force vector
  
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
  
      // Apply force to simulate rolling
      api.applyForce(force, [0, 0, 0]);
  
      // Handle jumping
      if (isJumping && Math.abs(velocityY) < 0.01) {
        setVelocityY(5); // Jump strength
        setIsJumping(false);
      }
      api.velocity.set(force[0], velocityY, force[2]);
      

      // Apply gravity
      setVelocityY((prev) => prev - 0.01);
      
      // console.log(force[0], velocityY, force[2]);
      // Update camera to follow the sphere from a fixed TPP offset
      const offset = 5; // Adjust this value for the desired follow distance
      const verticalOffset = 3; // Adjust the vertical position of the camera
  
      cameraRef.current.position.set(
        position.x - Math.sin(rotation.current.y) * offset,
        position.y + verticalOffset,
        position.z - Math.cos(rotation.current.y) * offset
      );
      cameraRef.current.lookAt(position.x, position.y + 1, position.z); // Look at the sphere from a slightly above position
      // Rotate the sphere to face the direction of movement
      ref.current.rotation.y = rotation.current.y;
    });
  
    return (
      <mesh ref={ref} castShadow receiveShadow>
        <sphereGeometry args={[1]} /> {/* Radius of 1 */}
        <meshStandardMaterial color="orange" />
      </mesh>
    );
  };
  
   
  
  
  

const RandomObject = ({ position, color, geometry }) => {
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
    const ref = geometry.type === 'sphere' ? sphereRef : boxRef;
  
    return (
        <mesh ref={ref} castShadow receiveShadow>
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
  
      objects.push(<RandomObject key={`${x}-${z}`} position={[x, y, z]} color={color} geometry={geometry} />);
    }
  
    return <>{objects}</>;
  };

// App Component
const App = () => {
  const cameraRef = useRef();

  return (
    <Canvas
      shadows
      camera={{ position: [0, 5, -10], fov: 50 }}
      onCreated={({ camera }) => (cameraRef.current = camera)}
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

export default App;