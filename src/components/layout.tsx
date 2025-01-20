import { motion } from 'framer-motion';
import Navbar from './navbar';
import { ModeToggle } from './mode-toggle';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Navbar />
            <ModeToggle />
          </div>
        </header>
        <main>{children}</main>
      </motion.div>
    </div>
  );
}