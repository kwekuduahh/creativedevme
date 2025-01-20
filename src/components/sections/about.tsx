import { motion } from 'framer-motion';
import { Code2, Figma, Palette as Palette2, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const skills = [
  {
    icon: <Figma className="w-10 h-10" />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences',
  },
  {
    icon: <Code2 className="w-10 h-10" />,
    title: 'Frontend Development',
    description: 'Building responsive and performant web applications',
  },
  {
    icon: <Palette2 className="w-10 h-10" />,
    title: 'Visual Design',
    description: 'Crafting beautiful and consistent visual systems',
  },
  {
    icon: <Sparkles className="w-10 h-10" />,
    title: 'Interaction Design',
    description: 'Designing delightful micro-interactions and animations',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">
            I'm a passionate designer and developer with a focus on creating
            user-centered digital experiences that are both beautiful and
            functional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="relative overflow-hidden group">
                <CardContent className="p-6">
                  <div className="mb-4 text-primary">{skill.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}