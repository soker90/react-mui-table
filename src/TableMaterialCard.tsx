import React from 'react'
import {
  Card
} from '@mui/material'
import TableMaterial from './TableMaterial'

const TableMaterialCard = (
  {
    sx,
    ...rest
  }: any) => {
  return (
    <Card
      sx={{
        width: 'auto',
        overflowX: 'visible',
        ...sx
      }}
      {...rest}
    >
      <TableMaterial {...rest} />
    </Card>
  )
}

export default TableMaterialCard
