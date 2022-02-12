import React from 'react';
import { connect } from 'react-redux';
import { remove } from '../store';

function GoalDetail({addGoal, onBtnClick, id}) {
  return (
      <li>
        <p>{addGoal}</p>
        <button onClick={onBtnClick}>Delete</button>
      </li>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onBtnClick: () => dispatch(remove(ownProps.id))
    }
}

export default connect(null, mapDispatchToProps)(GoalDetail);
