import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const AccordionIcon = ({ isExpanded }) => {
    return isExpanded ? <RemoveIcon /> : <AddIcon />;
  };
  
export default AccordionIcon;
