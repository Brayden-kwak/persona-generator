import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addFrustration, addGoal } from '../store';
import { Link } from 'react-router-dom';
import GoalDetail from './GoalDetail';
import FrustrationDetail from './FrustrationDetail';
import '../css/Goal.css';

function Goal({ addGoal, addFrustration, persona }) {

    const [goal, setGoal] = useState("");
    const [frustration, setFrustration] = useState("");

    function onSubmitOne(e){
        e.preventDefault();
        e.target.reset();
        addGoal(goal);
        setGoal("");
    }

    function onSubmitTwo(e){
        e.preventDefault();
        e.target.reset();
        addFrustration(frustration);
        setFrustration("");
    }
console.log(persona);
    return (
        <>
            <div className="container">
                <div className='progressBar'>
                    <div 
                        style={{width: <Goal /> ? "66.6%" : ""}}
                    />
                </div>
                    <div className="second-container-goal">
                        <div>
                            <p>Goal</p>                          
                                <ul>                             
                                    {persona?.map((item) => (
                                        <GoalDetail {...item} key={item?.id}/>
                                    ))}                               
                                </ul>
                                <form onSubmit={onSubmitOne}>
                                    <input className="goalInput" type="text" value={goal} onChange={(e) => setGoal(e.target.value)}/>
                                    <button disabled={!goal}>Add</button>
                                </form>
                        </div>
                        <div>
                            <p>Frustrations</p>                          
                                <ul>                             
                                    {persona?.map((item) => (
                                        <FrustrationDetail {...item} key={item?.id}/>
                                    ))}                               
                                </ul>
                                <form onSubmit={onSubmitTwo}>
                                    <input className="goalInput" type="text" value={frustration} onChange={(e) => setFrustration(e.target.value)}/>
                                    <button disabled={!frustration}>Add</button>
                                </form>
                        </div>
                        <div className="btn-container">
                            <Link to="/personality" className="link">
                                <button className="previous">Previous</button>
                            </Link>
                            <Link to="/story" className="link">
                                <button className="next">Next</button>
                            </Link>
                        </div>
                    </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {persona: state};
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addGoal: (goal) => dispatch(addGoal(goal)),
        addFrustration: (frustration) => dispatch(addFrustration(frustration))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal);
