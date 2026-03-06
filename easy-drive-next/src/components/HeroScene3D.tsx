"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Torus, RoundedBox } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function GlowingRing({ position, color, size = 1 }: { position: [number, number, number]; color: string; size?: number }) {
    const ref = useRef<THREE.Mesh>(null!);
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
            ref.current.rotation.y += 0.005;
        }
    });
    return (
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1}>
            <Torus ref={ref} args={[size, size * 0.08, 16, 48]} position={position}>
                <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} emissive={color} emissiveIntensity={0.15} />
            </Torus>
        </Float>
    );
}

function FloatingCar() {
    const group = useRef<THREE.Group>(null!);
    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
            group.current.position.y = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
        }
    });

    return (
        <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.5}>
            <group ref={group} position={[0, -0.2, 0]}>
                {/* Car body */}
                <RoundedBox args={[2.4, 0.6, 1.2]} radius={0.15} position={[0, 0, 0]}>
                    <meshStandardMaterial color="#f37021" metalness={0.7} roughness={0.2} />
                </RoundedBox>
                {/* Cabin */}
                <RoundedBox args={[1.4, 0.5, 1.1]} radius={0.12} position={[0.1, 0.5, 0]}>
                    <meshPhysicalMaterial color="#87ceeb" metalness={0.1} roughness={0} transmission={0.6} thickness={0.3} />
                </RoundedBox>
                {/* Wheels */}
                {([[-0.7, -0.35, 0.65], [-0.7, -0.35, -0.65], [0.7, -0.35, 0.65], [0.7, -0.35, -0.65]] as [number, number, number][]).map((pos, i) => (
                    <mesh key={i} position={pos} rotation={[Math.PI / 2, 0, 0]}>
                        <cylinderGeometry args={[0.2, 0.2, 0.12, 24]} />
                        <meshStandardMaterial color="#1a1a2e" metalness={0.5} roughness={0.4} />
                    </mesh>
                ))}
                {/* Headlights */}
                {([[1.2, 0.05, 0.4], [1.2, 0.05, -0.4]] as [number, number, number][]).map((pos, i) => (
                    <mesh key={i} position={pos}>
                        <sphereGeometry args={[0.08, 16, 16]} />
                        <meshStandardMaterial color="#fffbe6" emissive="#fffbe6" emissiveIntensity={2} />
                    </mesh>
                ))}
            </group>
        </Float>
    );
}

function ParticleField() {
    const count = 60;
    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            pos[i * 3] = (Math.random() - 0.5) * 10;
            pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
            pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
        }
        return pos;
    }, []);

    const ref = useRef<THREE.Points>(null!);
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y = state.clock.elapsedTime * 0.02;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[positions, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.04} color="#f37021" transparent opacity={0.5} sizeAttenuation />
        </points>
    );
}

export default function HeroScene3D() {
    return (
        <div className="w-full h-[500px] md:h-[550px]">
            <Canvas
                camera={{ position: [0, 0.5, 5], fov: 40 }}
                gl={{ alpha: true, antialias: true }}
                style={{ background: "transparent" }}
            >
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
                <pointLight position={[-4, 2, 2]} intensity={0.6} color="#f37021" />
                <pointLight position={[4, -1, 3]} intensity={0.4} color="#004883" />
                <spotLight position={[0, 5, 0]} intensity={0.3} color="#6eb746" angle={0.6} penumbra={1} />

                <FloatingCar />

                {/* Decorative rings */}
                <GlowingRing position={[-2.5, 1.5, -2]} color="#004883" size={0.7} />
                <GlowingRing position={[2.8, -0.5, -1.5]} color="#f37021" size={0.5} />
                <GlowingRing position={[0, 2, -3]} color="#6eb746" size={0.4} />

                {/* Floating orbs */}
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
                    <Sphere args={[0.18, 32, 32]} position={[-3, 0.5, 0]}>
                        <MeshDistortMaterial color="#f37021" distort={0.4} speed={2} metalness={0.8} roughness={0.2} />
                    </Sphere>
                </Float>
                <Float speed={1.5} rotationIntensity={0.3} floatIntensity={2}>
                    <Sphere args={[0.12, 32, 32]} position={[3.2, 1.8, -1]}>
                        <MeshDistortMaterial color="#6eb746" distort={0.5} speed={3} metalness={0.8} roughness={0.2} />
                    </Sphere>
                </Float>
                <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1}>
                    <RoundedBox args={[0.25, 0.25, 0.25]} radius={0.05} position={[2.5, -1.5, 0.5]}>
                        <meshStandardMaterial color="#004883" metalness={0.6} roughness={0.3} />
                    </RoundedBox>
                </Float>

                <ParticleField />
            </Canvas>
        </div>
    );
}
