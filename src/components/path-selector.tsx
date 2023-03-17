import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'
import { Form } from './ui/form'

export const PathSelector = () => {
  const [paths, setPaths] = useState<string[]>([])
  const [value, setValue] = useState('/')
  const [error, setError] = useState('')

  const handleSubmit = async () => {
    invoke<string[]>('list_dir', { path: value })
      .then(data => {
        setError('')
        setPaths(data)
      })
      .catch(err => {
        setError(err)
        setPaths([])
      })
  }

  return (
    <div className="flex flex-col gap-6 h-full">
      <Form onSubmit={handleSubmit} className="pt-6 px-6">
        <Form.Field errors={error ? [error] : null}>
          <div className="flex w-full gap-3">
            <Form.Input
              size="sm"
              classNameOuter="flex-1 w-full"
              placeholder="Path..."
              value={value}
              onChange={e => setValue(e.target.value)}
              errors={error ? [error] : null}
            />
            <Form.Button size="sm" type="submit">
              Submit
            </Form.Button>
          </div>
        </Form.Field>
      </Form>

      <div className="px-6 pb-6 flex flex-col gap-3 overflow-y-auto">
        {paths.map(path => (
          <div key={path}>{path}</div>
        ))}
      </div>
    </div>
  )
}
