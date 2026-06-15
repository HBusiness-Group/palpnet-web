import { cn } from '@/lib/utils'

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType
  size?: 'sm' | 'default' | 'lg' | 'xl' | 'full'
}

export function Container({
  className,
  as: Tag = 'div',
  size = 'default',
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        size === 'sm' && 'max-w-3xl',
        size === 'default' && 'max-w-6xl',
        size === 'lg' && 'max-w-7xl',
        size === 'xl' && 'max-w-screen-2xl',
        size === 'full' && 'max-w-none',
        className
      )}
      {...props}
    />
  )
}
