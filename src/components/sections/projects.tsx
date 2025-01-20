import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const projects = [
  {
    title: 'E-commerce Dashboard',
    description: 'A modern dashboard for managing online stores',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    category: 'ux',
    link: '#',
    github: '#',
  },
  {
    title: 'Social Media App',
    description: 'Mobile-first social platform with real-time features',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2374&auto=format&fit=crop',
    category: 'frontend',
    link: '#',
    github: '#',
  },
  {
    title: 'Travel Booking Platform',
    description: 'User-centered travel experience platform',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2421&auto=format&fit=crop',
    category: 'ux',
    link: '#',
    github: '#',
  },
  {
    title: 'Portfolio Generator',
    description: 'Dynamic portfolio creation tool for creatives',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2369&auto=format&fit=crop',
    category: 'frontend',
    link: '#',
    github: '#',
  },
];

const categories = [
  { value: 'all', label: 'All Projects' },
  { value: 'ux', label: 'UX Design' },
  { value: 'frontend', label: 'Frontend' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'all' || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="flex justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.value)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="overflow-hidden group">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardFooter className="gap-4">
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" /> Source Code
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}