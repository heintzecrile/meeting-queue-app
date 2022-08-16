import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { useHistory } from "react-router-dom";
import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import Logo from "icons/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: "12px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: "#FFFFFF" }}>
        <Toolbar>
          <Container>
            <IconButton onClick={() => history.push("/")}>
              <Logo />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}
