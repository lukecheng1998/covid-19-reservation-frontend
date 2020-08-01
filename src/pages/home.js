import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getEvents} from '../redux/actions/dataActions'
//import a skeleton project later on
 class home extends Component {
    render() {
        const { user: {
            authenticated, fullName, loading
        }} = this.props;
        return (
            loading ? (
                <p>Now Loading</p>
            ):(
                !authenticated ? (
                    <Typography variant="h2">
                        Reservation website for Convention Centers and Concerts
                    </Typography>
                   ):(
                    <Typography variant="h2">Hi {fullName} how are you doing?</Typography>
                   )
            )
           
        )
            
    }
}

home.propTypes = {
    getEvents: PropTypes.func.isRequired,
    data: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    data: state.data,
    user: state.user
})
export default connect(mapStateToProps, {getEvents})(home);
