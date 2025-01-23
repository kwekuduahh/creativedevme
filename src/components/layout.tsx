import { motion } from "framer-motion";
import Navbar from "@/components/new sections/NavBar";
import { ModeToggle } from "./mode-toggle";
import { ExpandableTabs } from "./ui/expandable-tabs";
import { Home, BriefcaseBusiness, User } from "lucide-react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const tab = [
    { title: "Home", icon: Home, href: "#hero" },
    { title: "Projects", icon: BriefcaseBusiness, href: "#projects" },
    { title: "About Me", icon: User, href: "#about" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}>
        <header className="fixed top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
          <div className="container flex items-center justify-between px-4 py-4 mx-auto">
            <Navbar />
            <ModeToggle />
          </div>
        </header>
        <main className="max-sm:mt-14">{children}</main>
      </motion.div>
      <motion.div
        className="fixed flex flex-row justify-center w-full gap-4 p-4 bottom-1"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.5 }}>
        <ExpandableTabs
          activeColor="text-white"
          tabs={tab}
          className="backdrop-blur-sm bg-background/40"
        />
      </motion.div>
    </div>
  );
}
