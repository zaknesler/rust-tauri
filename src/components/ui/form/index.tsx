import { clsx } from 'clsx'
import { PropsWithChildren } from 'react'
import { Button } from './elements/button'
import { Checkbox } from './elements/checkbox'
import { Field } from './elements/field'
import { Input } from './elements/input'
import { Select } from './elements/select'
import { TextArea } from './elements/textarea'

type FormProps = JSX.IntrinsicElements['form'] &
  PropsWithChildren<{
    submitOnEnter?: boolean
    disabled?: boolean
  }>

const FormRoot: React.FC<FormProps> = ({
  children,
  disabled,
  onSubmit,
  submitOnEnter = true,
  ...props
}) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (disabled) return
    e.preventDefault()
    e.stopPropagation()
    onSubmit?.(e)
  }

  return (
    <form
      {...props}
      className={clsx('flex flex-col gap-6', props.className)}
      onSubmit={handleSubmit}
      onKeyDown={e => submitOnEnter && e.key === 'Enter' && handleSubmit(e)}
    >
      {children}
    </form>
  )
}

export const Form = Object.assign(FormRoot, {
  Field,
  Input,
  Select,
  Button,
  Checkbox,
  TextArea,
})
