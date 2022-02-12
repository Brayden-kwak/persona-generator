import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../store';

function FrustrationDetail({addFrustration, onBtnClick, id}) {
  return (
      <li>
        <p>{addFrustration}</p>
        <button onClick={onBtnClick}>Delete</button>
      </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(remove(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(FrustrationDetail);
