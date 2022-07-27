import {useMemo} from 'react';
import {IconButton, TableCell, Tooltip} from '@mui/material';
import uniqId from 'uniqid';

import {tooltipStyle, actionIcon} from './styles';
import {Action, DisabledButton} from "../../../../types";

interface BodyActionsButtonsProps {
    row: any;
    index: number;
    actions: Action[]
}

const BodyActionsButtons = ({row, index, actions,}: BodyActionsButtonsProps) => {

    const actionsFiltered = useMemo(
        () => actions.filter(({isFreeAction}) => !isFreeAction),
        [actions],
    );

    const _isDisabled: boolean = (disabled: DisabledButton) => (
        typeof disabled === 'function'
            ? disabled(row)
            : disabled
    );

    return (
        <TableCell align='right'>
            {actionsFiltered
                .map(({
                          icon: Icon, tooltip, onClick, to, disabled, ...restButton
                      }) => (
                    <Tooltip
                        key={uniqId()}
                        title={tooltip}
                        sx={tooltipStyle}
                        disabled={_isDisabled(disabled)}
                        component='span'
                    >
                        <IconButton
                            {...(onClick && {onClick: () => onClick(row, index)})}
                            {...(to && {to: to(row, index)})}
                            {...restButton}
                            size='large'
                        >
                            <Icon className={actionIcon}/>
                        </IconButton>
                    </Tooltip>
                ))}
        </TableCell>
    );
};

export default BodyActionsButtons;
