import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
//Probably need our own icon
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";
import MyButton from "../../util/MyButton";
//Redux
import { connect } from "react-redux";
import { postEvents, clearErrors } from "../../redux/actions/dataActions";
const styles = (theme) => ({
  ...theme.spreadThis,
  submitButton: {
    position: "relative",
    float: "right",
    marginTop: 10,
  },
  progressSpinner: {
    position: "absolute",
  },
  closeButton: {
    position: "absolute",
    left: "91%",
    top: "6%",
  },
});
export class Events extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      event: "",
      attendants: 0,
      startDate: "",
      endDate: "",
      location: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.UI.errors) {
      this.setState({
        errors: nextProps.UI.errors,
      });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({
        open: false,
        attendants: 0,
        startDate: "",
        endDate: "",
        location: "",
        event: "",
        errors: {},
      });
    }
  }
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.props.clearErrors();
    this.setState({
      open: false,
      errors: {},
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.postEvents({
      attendants: this.state.attendants,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      location: this.state.location,
      event: this.state.event,
    });
  };
  render() {
    const { errors } = this.state;
    const {
      classes,
      UI: { loading },
    } = this.props;
    return (
      <Fragment>
        <MyButton onClick={this.handleOpen} tip="Add a new Event">
          <AddIcon />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <Button
            tip="Close"
            onClick={this.handleClose}
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </Button>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="event"
                type="text"
                label="Event"
                placeholder="Add an event"
                className={classes.textField}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress
                    size={30}
                    className={classes.progressSpinner}
                  />
                )}
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </Fragment>
    );
  }
}
Events.propTypes = {
  postEvents: PropTypes.func.isRequired,
  UI: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  UI: state.UI,
  user: state.user
});
const mapActionsToProps = {postEvents}
export default connect(mapStateToProps, { postEvents, clearErrors })(
  withStyles(styles)(Events)
);
