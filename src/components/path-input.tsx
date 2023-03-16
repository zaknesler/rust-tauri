import { FormEvent, useState } from 'react'
import { Form } from './ui/form'

type FormProps = {
  onSubmit: (name: string) => void
  className?: string
}

export const PathInput: React.FC<FormProps> = ({ onSubmit, className }) => {
  const [path, setPath] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(path)
  }

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <Form.Field label="Path">
        <div className="flex w-full gap-3">
          <Form.Input
            size="sm"
            classNameOuter="flex-1 w-full"
            placeholder="Path..."
            value={path}
            onChange={e => setPath(e.target.value)}
          />
          <Form.Button size="sm" type="submit">
            Submit
          </Form.Button>
        </div>
      </Form.Field>
    </Form>
  )
}
