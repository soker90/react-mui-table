import {ReactNode} from 'react'

export interface Column {
  title: string;
  field?: string;
  render?: (row: any) => ReactNode;
}

export interface Action {
  icon: ReactNode
  onClick: (row: any) => void
  tooltip?: string
  disabled?: (row: any) => boolean
}