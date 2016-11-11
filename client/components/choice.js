import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import RaisedButton from 'material-ui/RaisedButton'

// import choice from '../actions/set-choice'


class Choice extends Component {

  render() {
    const {  } = this.props
    return (
      <div className="choices">
        <span className="rock"><RaisedButton onClick={ rock } label="Rock" primary={true} /> </span>
        <span className="paper"><RaisedButton onClick={ paper } label="Paper" primary={true} /> </span>
        <span className="scissors"><RaisedButton onClick={ scissors } label="Scissors" primary={true} /> </span>
      </div>
    )
  }
}

// onClick(choice){
//
// }

const mapStateToProps = (state) => {
  return {
    choice: state.choice,
  }
}

export default connect(mapStateToProps, {})(Choice)
