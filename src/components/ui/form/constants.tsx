import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
import { cva } from 'class-variance-authority'
import { HTMLInputTypeAttribute, ReactNode } from 'react'

export const input = cva(
  [
    'appearance-none shadow-xs font-normal transition-[border,box-shadow] h-full',
    'focus:outline-none focus:ring-4 focus:ring-opacity-30',
    'placeholder:text-gray-400 dark:placeholder:text-gray-500',
  ],
  {
    variants: {
      type: {
        input: [
          'form-input w-full rounded-lg bg-white border',
          'dark:bg-gray-900 dark:text-gray-100',
        ],
        checkbox: [
          'form-checkbox rounded p-2 checked:bg-gray-600 border-2',
          'dark:bg-gray-800 dark:focus:ring-gray-800 dark:focus:ring-offset-gray-600',
        ],
      },
      error: {
        true: [
          'border-red-500 bg-[right_2.75rem_center] pr-12',
          'focus:border-red-600 focus:ring-red-500',
          'dark:border-red-900',
        ],
        false: [
          'border-gray-200 text-gray-700',
          'focus:border-gray-600 focus:ring-gray-500',
          'dark:focus:ring-gray-800 dark:border-gray-800 dark:focus:border-gray-500',
        ],
      },
      size: {
        sm: 'px-3 py-1.5',
        md: 'px-4 py-3',
      },
      disabled: { true: 'pointer-events-none select-none opacity-50' },
      withIcon: { true: 'pl-12' },
    },
    defaultVariants: {
      type: 'input',
      error: false,
      disabled: false,
      withIcon: false,
    },
  },
)

export const disabledElement = cva(null, {
  variants: { disabled: { true: 'pointer-events-none select-none' } },
})

export const icons = new Map<HTMLInputTypeAttribute | undefined, ReactNode>([
  ['password', <LockClosedIcon key="password-icon" className="h-6 w-6" />],
  ['email', <EnvelopeIcon key="email-icon" className="h-6 w-6" />],
])

export const placeholders = new Map<HTMLInputTypeAttribute | undefined, string>([
  ['password', '••••••••••••'],
  ['email', 'you@example.com'],
])
