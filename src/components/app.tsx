import { invoke } from '@tauri-apps/api/tauri'
import { FormEvent, useState } from 'react'

export const App = () => {
  const [name, setName] = useState('')
  const [paths, setPaths] = useState<string[]>([])

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPaths(await invoke('paths', { path: name }))
  }

  return (
    <div className="container">
      {JSON.stringify(paths)}
      <div className="row">
        <form onSubmit={handleSubmit}>
          <input onChange={e => setName(e.currentTarget.value)} placeholder="Enter a name..." />
          <button type="submit">List dir</button>
        </form>
      </div>
    </div>
  )
}
