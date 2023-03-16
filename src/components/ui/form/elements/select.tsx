import { ErrorIcon } from '../components/error-icon'
import { Icon } from '../components/icon'
import { disabledElement, input } from '../constants'

type SelectProps = JSX.IntrinsicElements['select'] & {
  options: { label: string; value: string }[]
  errors?: string[] | null
  icon?: React.ReactNode
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<SelectProps> = ({
  options,
  errors,
  icon,
  disabled,
  className,
  ...props
}) => (
  <div className={disabledElement({ disabled, class: 'relative' })}>
    <ErrorIcon errors={errors} />
    <Icon>{icon}</Icon>
    <select
      {...props}
      value={props.value}
      className={input({
        type: 'input',
        className,
        withIcon: !!icon,
        disabled,
        error: !!errors,
      })}
    >
      {options.length
        ? options.map(({ label, value }) => (
            <option value={value} key={value}>
              {label}
            </option>
          ))
        : ''}
    </select>
  </div>
)
