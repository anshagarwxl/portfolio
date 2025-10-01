// components/star-background-canvas.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Stars() {
  const ref = useRef<THREE.Points>(null);

  // Number of points (keep reasonable for perf)
  const COUNT = 2000;
  const RADIUS = 2.4;

  // Build a valid Float32Array of length COUNT * 3
  const positions = useMemo(() => {
    const arr = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      // random direction on a sphere (avoid zero length)
      let x = Math.random() * 2 - 1;
      let y = Math.random() * 2 - 1;
      let z = Math.random() * 2 - 1;

      let len = Math.sqrt(x * x + y * y + z * z);
      if (!Number.isFinite(len) || len === 0) {
        // fallback if we generated 0 vector (rare)
        x = 1; y = 0; z = 0; len = 1;
      }

      // normalize & scale to random radius (0..RADIUS)
      const r = Math.cbrt(Math.random()) * RADIUS; // uniform distribution
      const nx = (x / len) * r;
      const ny = (y / len) * r;
      const nz = (z / len) * r;

      const idx = i * 3;
      arr[idx] = Number.isFinite(nx) ? nx : 0;
      arr[idx + 1] = Number.isFinite(ny) ? ny : 0;
      arr[idx + 2] = Number.isFinite(nz) ? nz : 0;
    }

    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.003}
          sizeAttenuation
          depthWrite={false}
          toneMapped={false}
        />
      </Points>
    </group>
  );
}

export default function StarBackgroundCanvas() {
  // Render Canvas only on client to avoid hydration mismatch warnings
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none opacity-70">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Stars />
      </Canvas>
    </div>
  );
}
