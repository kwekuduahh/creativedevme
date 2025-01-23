import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Laptop, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

function Scene() {
  return (
    <Float
      speed={4}
      rotationIntensity={0.5}
      floatIntensity={1}>
      <mesh>
        <torusKnotGeometry args={[1, 0.3, 128, 16]} />
        <meshNormalMaterial />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-16 overflow-hidden">
      <div className="container mx-auto px-4 h-[calc(100vh-4rem)] flex items-center">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}>
            <h1 className="mb-6 text-4xl font-bold text-transparent md:text-6xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text">
              UX Designer & Frontend Developer
            </h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Crafting beautiful, user-centered digital experiences with modern
              technologies and creative design solutions.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="gap-2">
                <Laptop className="w-4 h-4" /> View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2">
                <Palette className="w-4 h-4" /> Design Process
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-square">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[10, 10, 5]}
                intensity={1}
              />
              <Scene />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
