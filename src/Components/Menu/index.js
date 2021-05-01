import React from "react";
import styles from "./index.module.css";
import { withStyles } from "@material-ui/core/styles";
// import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import DraftsIcon from "@material-ui/icons/Drafts";
// import SendIcon from "@material-ui/icons/Send";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid  var(--purple)",
    boxShadow: " 0px 3px 1px 0px var(--purple)",
    backgroundColor: "#d6c4ff",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomisedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        // color="seconary"
        className={styles.menuButton}
        onClick={handleClick}
      >
        Menu ▽
      </button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <Link to="/about">About me</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/travel">Travel & Adventure</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/creativity">Creativity & Skills</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/lifestyle">Alternative Lifestyle</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/moongirl">The Lonely Moongirl</Link>
        </StyledMenuItem>
        <StyledMenuItem>
          <Link to="/dragon">Dragon Hearts Comic</Link>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
}
