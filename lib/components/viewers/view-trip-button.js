import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { connect } from 'react-redux'

import { setViewedTrip } from '../../actions/ui'

class ViewTripButton extends Component {
  static propTypes = {
    fromIndex: PropTypes.number,
    tripId: PropTypes.string,
    text: PropTypes.string,
    toIndex: PropTypes.number
  }

  _onClick = () => {
    this.props.setViewedTrip({
      tripId: this.props.tripId,
      fromIndex: this.props.fromIndex,
      toIndex: this.props.toIndex
    })
  }

  render () {
    return (
      <Button
        bsSize='xsmall'
        className='view-trip-button'
        onClick={this._onClick}
      >{this.props.text || 'Trip Viewer'}</Button>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setViewedTrip: (trip) => { dispatch(setViewedTrip(trip)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ViewTripButton)
