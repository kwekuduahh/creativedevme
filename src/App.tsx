import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/sonner';
import Layout from '@/components/layout';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;