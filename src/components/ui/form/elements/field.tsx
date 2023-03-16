import { cva } from 'class-variance-authority'
import { clsx } from 'clsx'
import { PropsWithChildren } from 'react'

type FieldProps = PropsWithChildren &
  JSX.IntrinsicElements['label'] & {
    label: string
    optional?: boolean
    errors?: string[] | null
  }

const field = cva('mb-1.5 text-sm font-semibold flex items-center justify-between', {
  variants: {
    error: {
      true: 'text-red-600 dark:text-red-500',
      false: 'text-gray-600 dark:text-gray-400',
    },
  },
})

export const Field: React.FC<FieldProps> = ({
  label,
  optional = false,
  errors,
  className,
  children,
  ...props
}) => (
  <label {...props} className={clsx('block', className)}>
    <div className={field({ error: !!errors })}>
      <span>{label}</span>
      {optional && (
        <span className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-500">
          Optional
        </span>
      )}
    </div>
    {children}
    {errors && <div className="mt-2 text-sm text-red-600 dark:text-red-500">{errors[0]}</div>}
  </label>
)
