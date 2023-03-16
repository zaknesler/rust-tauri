import { invoke } from '@tauri-apps/api/tauri'
import { useState } from 'react'
import { PathInput } from './path-input'

export const App = () => {
  const [paths, setPaths] = useState<string[] | null>([])

  const handleSubmit = async (path: string) => {
    setPaths(await invoke('list_dir', { path }))
  }

  return (
    <div className="flex gap-6 flex-col h-full">
      <PathInput className="pt-6 px-6" onSubmit={handleSubmit} />

      <div className="px-6 pb-6 flex flex-col gap-3 overflow-y-auto">
        {paths ? paths.map(path => <div key={path}>{path}</div>) : 'Could not find path'}
      </div>
    </div>
  )
}
