import { ExclamationCircleIcon } from '@heroicons/react/20/solid'
import { cva, type VariantProps } from 'class-variance-authority'

const errorIcon = cva('absolute right-4 flex text-red-600 dark:text-red-700', {
  variants: {
    position: {
      center: 'top-0 bottom-0 items-center',
      top: 'top-4 bottom-0 items-start',
      bottom: 'top-0 bottom-4 items-end',
    },
  },
  defaultVariants: {
    position: 'center',
  },
})

type ErrorIconProps = JSX.IntrinsicElements['div'] &
  VariantProps<typeof errorIcon> & {
    errors?: string[] | null
  }

export const ErrorIcon: React.FC<ErrorIconProps> = ({ errors, position, className, ...props }) => {
  if (!errors) return null

  return (
    <div {...props} className={errorIcon({ position, className })} title={errors[0]}>
      <ExclamationCircleIcon className="h-6 w-6 fill-current" />
    </div>
  )
}
