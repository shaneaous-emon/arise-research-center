import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

interface LinkButtonProps extends Omit<ButtonProps, 'type'> {
  to: string;
  external?: boolean;
}

const getVariantClasses = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'primary':
      return 'bg-accent-300 text-primary-800 hover:bg-accent-400 focus:ring-accent-300';
    case 'secondary':
      return 'bg-primary-800 text-white hover:bg-primary-700 focus:ring-primary-800';
    case 'outline':
      return 'bg-transparent border border-primary-800 text-primary-800 hover:bg-primary-50 focus:ring-primary-800';
    case 'text':
      return 'bg-transparent text-primary-800 hover:bg-primary-50 focus:ring-primary-800';
    default:
      return 'bg-accent-300 text-primary-800 hover:bg-accent-400 focus:ring-accent-300';
  }
};

const getSizeClasses = (size: ButtonSize): string => {
  switch (size) {
    case 'sm':
      return 'text-xs py-1 px-3';
    case 'md':
      return 'text-sm py-2 px-4';
    case 'lg':
      return 'text-base py-3 px-6';
    default:
      return 'text-sm py-2 px-4';
  }
};

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  fullWidth = false,
  ...props
}) => {
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  return (
    <button
      className={`inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        fullWidth ? 'w-full' : ''
      } ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export const LinkButton: React.FC<LinkButtonProps> = ({
  to,
  external = false,
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  icon,
  fullWidth = false,
  ...props
}) => {
  const variantClasses = getVariantClasses(variant);
  const sizeClasses = getSizeClasses(size);

  if (external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
          fullWidth ? 'w-full' : ''
        } ${variantClasses} ${sizeClasses} ${className}`}
        {...props}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </a>
    );
  }

  return (
    <Link
      to={to}
      className={`inline-flex items-center justify-center font-medium rounded transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        fullWidth ? 'w-full' : ''
      } ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </Link>
  );
};