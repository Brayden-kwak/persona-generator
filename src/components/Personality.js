import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {addName, addAge, addJob, addImage, addSex} from '../store';
import mobiscroll from '@mobiscroll/react-lite';

import '../css/Personality.css';

function Personality({persona, addName, addAge, addJob, addImage, addSex}) {

    // const params = useParams();
    // const profile = persona.find(data => data.id === parseInt(params.id));

    function handleSubmit(e) {

    }

    return (
      <>
        <div className="container">
            <div className='progressBar'>
                <div 
                    style={{width: <Personality /> ? "100%" : ""}}
                />
            </div>
            <div className="second-container">
                <form className="form-containers" onSubmit={handleSubmit}>
                    <textarea placeholder="One sentence user’s personality"/>

                    {/* <mobiscroll.Form>
                        <mobiscroll.FormGroup>
                            <label className="scroll-label">Introvert
                                <mobiscroll.Slider className="slider" value={45} color="warning" data-tooltip="false" />
                            </label>
                            <label className="scroll-label">Introvert
                                <mobiscroll.Slider className="slider" value={45} color="warning" data-tooltip="false" />
                            </label>
                            <label className="scroll-label">Introvert
                                <mobiscroll.Slider className="slider" value={45} color="warning" data-tooltip="false" />
                            </label>
                        </mobiscroll.FormGroup>
                    </mobiscroll.Form> */}
                    <div className='range-field'>
                        <div class="range-name-left">Introvert</div>
                            <input className="scroll" type="range" min="0" max="200" />
                        <div class="range-name-right">Extrovert</div>
                    </div>
                    <div className='range-field'>
                        <div class="range-name-left">Thinking</div>
                            <input className="scroll" type="range" min="0" max="200" />
                        <div class="range-name-right">Feeling</div>
                    </div>
                    <div className='range-field'>
                        <div class="range-name-left">Sensing</div>
                            <input className="scroll" type="range" min="0" max="200" />
                        <div class="range-name-right">Intuition</div>
                    </div>
                    <div className='range-field'>
                        <div class="range-name-left">Judging</div>
                            <input className="scroll" type="range" min="0" max="200" />
                        <div class="range-name-right">Perceiving</div>
                    </div>
                    <div className="btn-container">
                            <Link to="/" className="link">
                                <button className="previous">
                                    Previous
                                </button>
                            </Link>
                            <Link to="/personality" className="link">
                                <button className="next">
                                    Next    
                                </button>
                            </Link>
                        </div> 
                </form>
            </div>
            
            
        </div>
      </>
  );
}

const mapStateToProps = (state) => {
    return { persona: state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(dispatch)
    console.log(ownProps)
    return {
        addName: () => dispatch(addName(ownProps)),
        addAge: () => dispatch(addAge(ownProps)),
        addJob: () => dispatch(addJob(ownProps)),
        addImage: () => dispatch(addImage(ownProps)),
        addSex: () => dispatch(addSex(ownProps))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Personality);
