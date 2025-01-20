import { cn } from '@/lib/utils';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

export function Link({ href, children, className, ...props }: LinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'text-foreground/60 hover:text-foreground/80 transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}