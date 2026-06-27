import React, { Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import * as THREE from 'three';

function FloatingPanel({ position, color, label, accent }) {
  const meshRef = React.useRef();
  useFrame(({ mouse }) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.12, 0.05);
    meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.18, 0.05);
  });

  return (
    <group position={position}>
      <Float speed={1.3} rotationIntensity={0.55} floatIntensity={0.7}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1.5, 1, 0.1]} />
          <meshStandardMaterial color={color} metalness={0.4} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[1.3, 0.82, 0.06]} />
          <meshStandardMaterial color="#0f172a" metalness={0.1} roughness={0.8} />
        </mesh>
        <Text position={[0, -0.2, 0.12]} color="white" fontSize={0.17} anchorX="center" anchorY="middle">
          {label}
        </Text>
        <mesh position={[0, 0.25, 0.12]}>
          <sphereGeometry args={[0.12, 20, 20]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.5} />
        </mesh>
      </Float>
    </group>
  );
}

function Phone({ position, color }) {
  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={0.9}>
      <group position={position}>
        <mesh>
          <boxGeometry args={[0.9, 1.8, 0.12]} />
          <meshStandardMaterial color={color} metalness={0.45} roughness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.08]}>
          <boxGeometry args={[0.72, 1.45, 0.04]} />
          <meshStandardMaterial color="#111827" roughness={0.9} />
        </mesh>
        <mesh position={[0, 0.57, 0.09]}>
          <boxGeometry args={[0.26, 0.04, 0.02]} />
          <meshStandardMaterial color="#94a3b8" />
        </mesh>
      </group>
    </Float>
  );
}

function Laptop({ position }) {
  return (
    <Float speed={1.1} rotationIntensity={0.4} floatIntensity={0.6}>
      <group position={position}>
        <mesh rotation={[-0.08, 0.18, 0]}>
          <boxGeometry args={[2.3, 1.45, 0.12]} />
          <meshStandardMaterial color="#dbeafe" metalness={0.5} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0, 0.07]} rotation={[-0.08, 0.18, 0]}>
          <boxGeometry args={[2.05, 1.18, 0.04]} />
          <meshStandardMaterial color="#020617" roughness={0.95} />
        </mesh>
        <mesh position={[0, -0.85, -0.18]} rotation={[0.18, 0.18, 0]}>
          <boxGeometry args={[2.55, 0.1, 1.18]} />
          <meshStandardMaterial color="#1f2937" metalness={0.5} roughness={0.35} />
        </mesh>
      </group>
    </Float>
  );
}

function OrbitRing({ position, color, scale = 1 }) {
  const ringRef = React.useRef();
  useFrame((_, delta) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z += delta * 0.4;
    ringRef.current.rotation.x += delta * 0.18;
  });

  return (
    <mesh ref={ringRef} position={position} scale={scale}>
      <torusGeometry args={[0.9, 0.03, 16, 120]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} roughness={0.25} metalness={0.7} />
    </mesh>
  );
}

function FloatingOrb({ position, color, scale = 1 }) {
  const orbRef = React.useRef();
  useFrame(({ clock }) => {
    if (!orbRef.current) return;
    orbRef.current.position.y = position[1] + Math.sin(clock.getElapsedTime() * 1.4) * 0.12;
    orbRef.current.rotation.x += 0.01;
    orbRef.current.rotation.y += 0.015;
  });

  return (
    <Float speed={1.8} rotationIntensity={1.2} floatIntensity={1}>
      <mesh ref={orbRef} position={position} scale={scale}>
        <icosahedronGeometry args={[0.25, 0]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} roughness={0.15} metalness={0.85} />
      </mesh>
    </Float>
  );
}

function FloatingCard({ position, color, label }) {
  const cardRef = React.useRef();
  useFrame(({ clock }) => {
    if (!cardRef.current) return;
    cardRef.current.rotation.z = Math.sin(clock.getElapsedTime() * 0.7) * 0.03;
  });

  return (
    <Float speed={1.2} rotationIntensity={0.25} floatIntensity={0.5}>
      <group ref={cardRef} position={position}>
        <mesh>
          <boxGeometry args={[1.1, 0.72, 0.06]} />
          <meshStandardMaterial color={color} metalness={0.35} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0, 0.04]}>
          <boxGeometry args={[0.95, 0.56, 0.04]} />
          <meshStandardMaterial color="#020617" roughness={0.95} />
        </mesh>
        <Text position={[0, -0.07, 0.08]} color="white" fontSize={0.12} anchorX="center" anchorY="middle">
          {label}
        </Text>
      </group>
    </Float>
  );
}

function Workspace() {
  const logoPositions = useMemo(
    () => [
      { position: [-2.15, 1.2, -0.8], color: '#7c3aed', label: 'React', accent: '#38bdf8' },
      { position: [1.95, 1.0, -0.4], color: '#1d4ed8', label: 'Node', accent: '#22c55e' },
      { position: [-2.3, -0.8, -0.5], color: '#115e59', label: 'Mongo', accent: '#4ade80' },
      { position: [2.2, -1.0, -0.7], color: '#312e81', label: 'JS', accent: '#facc15' },
    ],
    [],
  );

  return (
    <>
      <ambientLight intensity={1.25} />
      <directionalLight position={[4, 4, 4]} intensity={2.2} color="#93c5fd" />
      <pointLight position={[-4, -2, 3]} intensity={2} color="#a855f7" />
      <pointLight position={[2, 2, 4]} intensity={1.2} color="#3b82f6" />
      <OrbitRing position={[-1.5, 0.9, -1.4]} color="#a855f7" scale={1.2} />
      <OrbitRing position={[1.8, -0.1, -1.1]} color="#3b82f6" scale={1.1} />
      <FloatingOrb position={[-0.6, 1.35, -0.3]} color="#38bdf8" />
      <FloatingOrb position={[1.4, 1.25, 0.2]} color="#22c55e" scale={1.2} />
      <FloatingCard position={[-2.05, -1.25, -0.3]} color="#4c1d95" label="APIs" />
      <FloatingCard position={[2.0, -1.2, -0.2]} color="#1d4ed8" label="Mobile" />
      <group position={[0, -0.05, 0]}>
        <Laptop position={[0, -0.3, 0]} />
        <Phone position={[-2.3, -0.35, 0.5]} color="#7c3aed" />
        <Phone position={[2.25, -0.2, 0.5]} color="#2563eb" />
      </group>
      {logoPositions.map((item) => (
        <FloatingPanel key={item.label} {...item} />
      ))}
    </>
  );
}

export default function WorkspaceCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 7], fov: 45 }} dpr={[1, 1.5]} gl={{ antialias: true, alpha: true }}>
      <Suspense fallback={null}>
        <Workspace />
      </Suspense>
    </Canvas>
  );
}
