import { TableCell, TableHead, TableRow } from '@mui/material';

interface HeadTableProps {
  columns: Column[];
  actions?: Action[];
  multiSelect?: boolean;
}

const HeadTable = ({ columns, actions, multiSelect }) => (
  <TableHead styles={{ fontSize: 20 }}>
    <TableRow>
      {multiSelect && <TableCell />}
      {columns.map(({ title }) => (
        <TableCell key={title}>
          {title}
        </TableCell>
      ))}
      {actions
      && (
        <TableCell align='right'>
          Acciones
        </TableCell>
      )}
    </TableRow>
  </TableHead>
);

export default HeadTable;
