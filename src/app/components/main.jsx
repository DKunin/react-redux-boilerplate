import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Actions from '../redux/actions/';

class Main extends React.Component {
  render() {
    return (
      <div>
        Sample App
      </div>
    )
  }
}

Main.propTypes = {
  days: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  const { days, tasks } = state.app;
  return {
    days,
    tasks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    reset: () => { dispatch(Actions.resetApp()) },
    setUser: (user) => { dispatch(Actions.setUser(user)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
