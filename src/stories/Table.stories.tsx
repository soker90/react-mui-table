import { ComponentStory, ComponentMeta } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {TableMaterial as Table} from '../index'

export default {
  title: 'Table',
  component: Table
} as ComponentMeta<typeof Table>

const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />

export const Primary = Template.bind({})

Primary.args = {
  columns: [
    {
      title: 'Columna 1',
      field: 'column'
    },
    {
      title: 'Columna 2',
      field: 'date',
      render: ({ date }: { date: Date }) => `Día ${date.getDay()}`
    },
    {
      title: 'Columna 3',
      field: 'column3'
    }
  ],
  data: [
    { column: 'Valor 1', date: new Date(1609428038070), column3: 'Otro valor' },
    { column: 'Valor 2', date: new Date(1609428038071), column3: 'Otro valor' },
    { column: 'Valor 3', date: new Date(1609428038072), column3: 'Otro valor' },
    { column: 'Valor 4', date: new Date(1609428038073), column3: 'Otro valor' },
    { column: 'Valor 5', date: new Date(1609428038074), column3: 'Otro valor' },
    { column: 'Valor 6', date: new Date(1609428038075), column3: 'Otro valor' },
    { column: 'Valor 7', date: new Date(1609428038076), column3: 'Otro valor' },
    { column: 'Valor 8', date: new Date(1609428038077), column3: 'Otro valor' },
    { column: 'Valor 9', date: new Date(1609428038078), column3: 'Otro valor' },
    { column: 'Valor 10', date: new Date(1609428038079), column3: 'Otro valor' }
  ],
  title: 'Mi tabla',
  refresh: action('Actualiza la tabla'),
  onRowClick: action('Se ha pulsado en una fila'),
  count: 10
}
