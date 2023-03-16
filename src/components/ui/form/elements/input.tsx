import type { VariantProps } from 'class-variance-authority'
import { clsx } from 'clsx'
import React, { forwardRef } from 'react'
import { ErrorIcon } from '../components/error-icon'
import { Icon } from '../components/icon'
import { disabledElement, icons, input, placeholders } from '../constants'

type InputProps = Omit<JSX.IntrinsicElements['input'], 'size'> &
  Pick<VariantProps<typeof input>, 'size'> & {
    classNameOuter?: string
    errors?: string[] | null
    icon?: React.ReactNode
  }

const InputWithRef: React.ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { errors, icon, size = 'md', disabled, className, classNameOuter, ...props },
  ref,
) => {
  const iconElement = icon || icons.get(props.type) || null

  return (
    <div
      className={disabledElement({
        disabled,
        class: clsx('relative', classNameOuter),
      })}
    >
      <ErrorIcon errors={errors} />
      <Icon>{iconElement}</Icon>
      <input
        {...props}
        type={props.type || 'text'}
        placeholder={props.placeholder || placeholders.get(props.type)}
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
          props.type === 'password' && 'tracking-widest',
        )}
      />
    </div>
  )
}

export const Input = forwardRef(InputWithRef)
