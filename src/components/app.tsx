import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'
import { Form } from './ui/form'

export const App = () => {
  const [paths, setPaths] = useState<string[]>([])

  const handleSubmit = async (name: string) => {
    setPaths(await invoke('paths', { path: name }))
  }

  return (
    <div className="p-6">
      {JSON.stringify(paths)}

      <div className="row">
        <Form onSubmit={handleSubmit} />
      </div>
    </div>
  )
}
