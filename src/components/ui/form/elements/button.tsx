import { cva, type VariantProps } from 'class-variance-authority'
import React, { PropsWithChildren, ReactNode } from 'react'
import { Spinner } from '../../spinner'

const button = cva(
  [
    'relative select-none appearance-none items-center justify-center font-semibold shadow-gray-200 transition-colors overflow-hidden',
    'focus:outline-none focus:ring-4 focus:ring-opacity-30',
    'dark:shadow-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-gradient-to-br from-gray-500 to-gray-600 text-white highlight-white/20',
          'hover:from-gray-600 hover:to-gray-700',
          'focus:ring-gray-500',
          'dark:focus:ring-gray-600 dark:from-gray-700 dark:to-gray-800',
        ],
        secondary: [
          'bg-white text-black focus:ring-gray-500 ring-1 ring-gray-200 border border-transparent',
          'hover:bg-gray-100 hover:border-gray-100',
          'focus:border-gray-500',
          'dark:bg-gray-900 dark:ring-gray-800 dark:hover:bg-gray-800 dark:hover:border-gray-800 dark:focus:border-gray-600 dark:text-gray-100',
        ],
        accent: [
          'bg-gradient-to-br from-accent-500 to-accent-600 text-white highlight-white/20',
          'hover:from-accent-600 hover:to-accent-700',
          'focus:ring-accent-500',
        ],
        danger: [
          'bg-gradient-to-br from-red-500 to-red-600 text-white  highlight-white/20',
          'hover:from-red-600 hover:to-red-700',
          'focus:ring-red-500',
        ],
      },
      size: {
        xs: 'px-3 py-1.5 text-xs shadow-sm rounded-md',
        sm: 'px-3.5 py-1.5 text-sm shadow-sm rounded-lg',
        md: 'px-5 py-2.5 text-base shadow-md rounded-lg',
        lg: 'px-6 py-4 text-lg shadow-lg rounded-lg',
      },
      disabled: {
        true: 'pointer-events-auto cursor-not-allowed opacity-60',
      },
      fullWidth: {
        true: 'flex w-full',
        false: 'inline-flex',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      disabled: false,
      fullWidth: false,
    },
  },
)

const inner = cva('inline-flex select-none appearance-none items-center justify-center', {
  variants: {
    loading: { true: 'opacity-0' },
  },
})

type ButtonProps = JSX.IntrinsicElements['button'] &
  VariantProps<typeof button> &
  PropsWithChildren & {
    icon?: ReactNode
    iconSide?: 'left' | 'right'
    loading?: boolean
    href?: string
  }

export const Button: React.FC<ButtonProps> = ({
  size = 'md',
  variant = 'primary',
  loading = false,
  iconSide = 'left',
  fullWidth = false,
  icon,
  disabled,
  className,
  children,
  ...props
}) => {
  const pending = loading || disabled

  return (
    <button
      {...props}
      disabled={pending}
      className={button({
        size,
        fullWidth,
        variant,
        disabled: pending,
        className,
      })}
    >
      <>
        {loading && (
          <div className="absolute inset-0 z-30 flex items-center justify-center">
            <Spinner variant={variant === 'secondary' ? 'dark' : 'light'} size={size} />
          </div>
        )}
        <div className={inner({ loading })}>
          {icon ? (
            <>
              {iconSide === 'left' && <span className="mr-1.5">{icon}</span>}
              <span>{children}</span>
              {iconSide === 'right' && <span className="ml-1.5">{icon}</span>}
            </>
          ) : (
            children
          )}
        </div>
      </>
    </button>
  )
}
