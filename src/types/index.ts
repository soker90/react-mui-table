import {ReactElement, ReactNode} from 'react'

export interface Column {
    title: string;
    field?: string;
    render?: (row: any) => ReactNode;
}

export type DisabledButton = boolean | ((row: any) => boolean);

export interface Action {
    icon: any;
    onClick: (row: any, index: number) => void
    tooltip: string
    disabled?: DisabledButton
    isFreeAction?: boolean
}