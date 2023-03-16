import { FormEvent, useState } from 'react'

type FormProps = {
  onSubmit: (name: string) => void
}

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [path, setPath] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(path)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Enter a path" value={path} onChange={e => setPath(e.target.value)} />
      <button type="submit">List dir</button>
    </form>
  )
}
