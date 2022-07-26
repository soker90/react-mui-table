import {
  Box, TableBody, TableCell, TableRow, Checkbox,
} from '@mui/material'
import { Link } from 'react-router-dom';

import BodyActionsButtons from './components/BodyActionsButtons';
import {Column, Action} from '../../types'

interface BodyTableProps {
  columns: Column[];
  actions?: Action[];
  classes: any;
  data: any[];
  href?: string;
  onRowClick?: (row: any) => void;
  multiSelect?: (row: any) => boolean;
  onSelected?: (event: any, row: any) => void;
  rowClass?: (row: any) => string;
}

const BodyTable = ({
  data, onRowClick, columns, href, classes, actions, multiSelect, onSelected, rowClass,
}: BodyTableProps) => (
  <TableBody>
    {data.map((row, index) => {
      const isSelected = multiSelect?.(row);
      return (
        <TableRow
          onMouseDown={() => onRowClick?.(row)}
          hover
          key={row.title}
          selected={isSelected}
          className={rowClass?.(row) || ''}
        >
          {Boolean(multiSelect) && (
            <TableCell padding='checkbox'>
              <Checkbox
                checked={isSelected}
                onChange={event => onSelected(event, row)}
                value={isSelected}
              />
            </TableCell>
          )}
          {columns.map(({ field, render }) => (
            <TableCell key={uniqId()}>
              <Box
                {...(href && {
                  component: Link,
                  to: href(row),
                  className: classes.cell,
                })}
              >
                {render?.(row) || row[field]}
              </Box>
            </TableCell>
          ))}

          {actions
          && (
            <BodyActionsButtons
              actions={actions}
              index={index}
              row={row}
            />
          )}
        </TableRow>
      );
    })}
  </TableBody>
);

export default BodyTable;
