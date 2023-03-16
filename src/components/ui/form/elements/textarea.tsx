import type { VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import React, { forwardRef } from 'react'
import { ErrorIcon } from '../components/error-icon'
import { Icon } from '../components/icon'
import { disabledElement, input } from '../constants'

type TextAreaProps = Omit<JSX.IntrinsicElements['textarea'], 'size'> &
  Pick<VariantProps<typeof input>, 'size'> & {
    classNameOuter?: string
    errors?: string[] | null
    icon?: React.ReactNode
  }

const TextAreaWithRef: React.ForwardRefRenderFunction<HTMLTextAreaElement, TextAreaProps> = (
  { errors, icon, size = 'md', disabled, className, classNameOuter, value, ...props },
  ref,
) => {
  const iconElement = icon || null

  return (
    <div
      className={disabledElement({
        disabled,
        class: clsx('relative', classNameOuter),
      })}
    >
      <ErrorIcon errors={errors} position="top" />
      <Icon>{iconElement}</Icon>
      <textarea
        {...props}
        value={value}
        ref={ref}
        className={clsx(
          input({
            type: 'input',
            size,
            error: !!errors,
            withIcon: !!iconElement,
            disabled,
            className,
          }),
          'min-h-[8rem]',
        )}
      />
    </div>
  )
}

export const TextArea = forwardRef(TextAreaWithRef)
