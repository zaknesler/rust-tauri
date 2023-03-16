import { PropsWithChildren } from 'react'

export const Icon: React.FC<PropsWithChildren> = ({ children }) => (
  <div className="absolute left-4 top-0 bottom-0 flex items-center text-gray-400 dark:text-gray-500">
    {children}
  </div>
)
