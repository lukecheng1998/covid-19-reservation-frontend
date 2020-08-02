import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";
import { logoutUser } from "../../redux/actions/userActions";
import Events from "../events/Events";
import SubdirectoryArrowLeftIcon from "@material-ui/icons/SubdirectoryArrowLeft";
import MyButton from "../../util/MyButton";
//add post events
//add my button
import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
//icons
//we'll try importing icons later
const styles = (theme) => ({
  ...theme.spreadThis,
});
export class Navbar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }
  handleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      user: { authenticated },
      classes,
    } = this.props;
    return (
      <AppBar position="fixed">
        <ToolBar className="nav-container">
          {authenticated ? (
            <Fragment>
              <MyButton
                tip="Logout"
                onClick={this.handleLogout}
                component={Link}
                to="/"
              >
                <SubdirectoryArrowLeftIcon />
              </MyButton>
              <Events />
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Sign Up
              </Button>
            </Fragment>
          )}
        </ToolBar>
      </AppBar>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapActionsToProps = {
  logoutUser,
};
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
};
export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(Navbar));
