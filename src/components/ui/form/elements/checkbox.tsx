import React from 'react'
import { disabledElement, input } from '../constants'

type CheckboxProps = JSX.IntrinsicElements['input'] & {
  label: string
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, className, disabled, ...props }) => {
  return (
    <label className={disabledElement({ disabled, class: 'flex items-center' })}>
      <input
        type="checkbox"
        className={input({ type: 'checkbox', disabled, className })}
        {...props}
      />
      <span className="ml-2 select-none">{label}</span>
    </label>
  )
}
