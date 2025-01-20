import { motion } from 'framer-motion';
import { Link } from '@/components/ui/link';

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => (
        <motion.div
          key={link.href}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Link
            href={link.href}
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            {link.label}
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}