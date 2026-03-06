"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Torus, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function SteeringWheel() {
    const ref = useRef<THREE.Group>(null!);

    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
            ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        }
    });

    return (
        <group ref={ref} position={[0, 0, 0]}>
            <Torus args={[1.2, 0.12, 16, 64]} castShadow>
                <meshStandardMaterial color="#1a1a2e" metalness={0.8} roughness={0.2} />
            </Torus>
            {/* Spokes */}
            {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((angle, i) => (
                <mesh
                    key={i}
                    position={[Math.cos(angle) * 0.6, Math.sin(angle) * 0.6, 0]}
                    rotation={[0, 0, angle]}
                >
                    <boxGeometry args={[1.2, 0.08, 0.08]} />
                    <meshStandardMaterial color="#333" metalness={0.6} roughness={0.3} />
                </mesh>
            ))}
            {/* Center hub */}
            <mesh position={[0, 0, 0.05]} rotation={[Math.PI / 2, 0, 0]}>
                <cylinderGeometry args={[0.25, 0.25, 0.1, 32]} />
                <meshStandardMaterial color="#f37021" metalness={0.5} roughness={0.3} />
            </mesh>
        </group>
    );
}

function FloatingOrbs() {
    return (
        <>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
                <Sphere args={[0.3, 32, 32]} position={[-2.5, 1.5, -1]}>
                    <MeshDistortMaterial color="#f37021" distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
                </Sphere>
            </Float>
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={2}>
                <Sphere args={[0.2, 32, 32]} position={[2.5, -1, -0.5]}>
                    <MeshDistortMaterial color="#004883" distort={0.4} speed={3} roughness={0.2} metalness={0.8} />
                </Sphere>
            </Float>
            <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1}>
                <Sphere args={[0.15, 32, 32]} position={[1.8, 2, 0.5]}>
                    <MeshDistortMaterial color="#6eb746" distort={0.5} speed={2.5} roughness={0.2} metalness={0.8} />
                </Sphere>
            </Float>
            <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.8}>
                <RoundedBox args={[0.4, 0.4, 0.4]} radius={0.08} position={[-2, -1.5, 0]}>
                    <meshStandardMaterial color="#f37021" metalness={0.6} roughness={0.3} />
                </RoundedBox>
            </Float>
        </>
    );
}

export default function Scene3D({ className = "" }: { className?: string }) {
    return (
        <div className={`w-full ${className}`} style={{ height: "420px" }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.6} />
                <directionalLight position={[5, 5, 5]} intensity={1} castShadow />
                <pointLight position={[-3, 2, 2]} intensity={0.5} color="#f37021" />
                <pointLight position={[3, -2, 2]} intensity={0.3} color="#004883" />

                <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
                    <SteeringWheel />
                </Float>

                <FloatingOrbs />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    autoRotate
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 1.8}
                    minPolarAngle={Math.PI / 3}
                />
            </Canvas>
        </div>
    );
}
