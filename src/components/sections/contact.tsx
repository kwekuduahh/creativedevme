import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-4">
                Let's Work Together
              </CardTitle>
              <p className="text-muted-foreground">
                Have a project in mind? I'd love to hear about it. Send me a
                message and let's create something amazing together.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Input placeholder="Name" />
                  </div>
                  <div className="space-y-2">
                    <Input type="email" placeholder="Email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Tell me about your project"
                    className="min-h-[150px]"
                  />
                </div>
                <Button className="w-full gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}