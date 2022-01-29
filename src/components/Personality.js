import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {addName, addAge, addJob, addImage} from '../store';

import TitleIndustry from './TitleIndustry';
import Profile from './Profile';

function Personality({persona, addName, addAge, addJob, addImage}) {

    // const params = useParams();
    // const profile = personaData.find(data => data.id === parseInt(params.id));

  return (
      <>
        <h1>Personality</h1>
        <div className='progressBar'>
            <div 
                style={{width: <Personality /> ? "100%" : ""}}
            />
        </div>
        {persona?.map((item) => (
            <>
                <h1 key={item?.id}>{item.name}</h1>
                <h1 key={item?.id}>{item.age}</h1>
                <h1 key={item?.id}>{item.job}</h1>
                <img src={item?.images} alt="" key={item?.id}/>
            </>
        ))}
        
        <Link to="/">Next</Link>
      </>
  );
}

const mapStateToProps = (state) => {
    return { persona: state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addName: () => dispatch(addName(ownProps)),
        addAge: () => dispatch(addAge(ownProps)),
        addJob: () => dispatch(addJob(ownProps)),
        addImage: () => dispatch(addImage(ownProps))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Personality);
