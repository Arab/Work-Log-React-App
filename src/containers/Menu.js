import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { IconButton } from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SimpleMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  function handleLogOut() {
      handleClose();
      props.handleMenuLogOutClick();
  }
  function handleHistory() {
    handleClose();
    props.handleMenuHistoryClick();
}
function handleClock() {
  handleClose();
  props.handleMenuClockClick();
}

  return (
    <div>
      <IconButton
        aria-label="More"
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClock}>Log Timer</MenuItem>
        <MenuItem onClick={handleHistory}>History</MenuItem>
        <MenuItem onClick={handleLogOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenu;