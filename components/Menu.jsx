import React from 'react'
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";


function MenuComp({text}) {
     const [anchorEl, setAnchorEl] = React.useState(null);
     const open = Boolean(anchorEl);
     const handleClick = (event) => {
       setAnchorEl(event.currentTarget);
     };
     const handleClose = () => {
       setAnchorEl(null);
     };
  return (
    <div>
      <button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {text}
      </button>

      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem className='hover:bg-red-200' onClick={handleClose}>Vsion & mission</MenuItem>
        <MenuItem className='hover:bg-red-200' onClick={handleClose}>legacy</MenuItem>
        <MenuItem className='hover:bg-red-200' onClick={handleClose}>Awards</MenuItem>
        <MenuItem className='hover:bg-red-200' onClick={handleClose}>Advantage</MenuItem>
      </Menu>
    </div>
  );
}

export default MenuComp
