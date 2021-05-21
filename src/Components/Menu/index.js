import React from "react";
import styles from "./index.module.css";
import { withStyles } from "@material-ui/core/styles";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";

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
        <Link to="/about">
          <StyledMenuItem>About me</StyledMenuItem>
        </Link>
        <Link to="/blogpage">
          <StyledMenuItem>Blog</StyledMenuItem>
        </Link>
        <Link to="/travel">
          <StyledMenuItem>Travel & Adventure</StyledMenuItem>
        </Link>
        <Link to="/creativity">
          <StyledMenuItem>Creativity & Skills</StyledMenuItem>
        </Link>
        <Link to="/lifestyle">
          <StyledMenuItem>Alternative Lifestyle</StyledMenuItem>
        </Link>
        <Link to="/moongirl">
          <StyledMenuItem>The Lonely Moongirl</StyledMenuItem>
        </Link>
        <Link to="/dragon">
          <StyledMenuItem>Dragon Hearts Comic</StyledMenuItem>
        </Link>
        <Link to="/codeprojects">
          <StyledMenuItem>Code Projects</StyledMenuItem>
        </Link>
        <Link to="/contact">
          <StyledMenuItem>Contact</StyledMenuItem>
        </Link>
      </StyledMenu>
    </div>
  );
}
