import { cn } from '@/lib/utils';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label: string;
  variant: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
};

const Button = ({ label, variant, onClick, className }: ButtonProps) => {
  return (
    <button
      className={cn(
        `rounded-lg px-9 text-base font-semibold uppercase transition-colors ${className}`,
        {
          'text-dark hover:text-red bg-white py-4': variant === 'primary',
          'hover:text-dark border border-white bg-transparent py-2.5 text-white hover:bg-white':
            variant === 'outline'
        }
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
