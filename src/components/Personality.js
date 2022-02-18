import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  addPersonalityTitle,
  addPersonality1,
  addPersonality2,
  addPersonality3,
  addPersonality4
} from "../store";
import mobiscroll from "@mobiscroll/react-lite";

import "../css/Personality.css";

function Personality({
  persona,
  addPersonalityTitle,
  addPersonality1,
  addPersonality2,
  addPersonality3,
  addPersonality4
}) {
  // const params = useParams();
  // const profile = persona.find(data => data.id === parseInt(params.id));

  function handleSubmit(e) {}

  const navigate = useNavigate();

    const handleClickNext = () => {
        navigate('/goal');
    }

    const handleClickPrev = () => {
        navigate('/profile');
    }

  return (
    <>
      <div className="container">
        <div className="progressBar">
          <div style={{ width: <Personality /> ? "50%" : "" }} />
        </div>
        <div className="second-container">
          <form className="form-containers" onSubmit={handleSubmit}>
            <textarea placeholder="One sentence user’s personality" />

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
            <div className="range-field">
              <div className="range-name-left">Introvert</div>
                <input className="scroll" type="range" min="0" max="200" />
              <div className="range-name-right">Extrovert</div>
            </div>
            <div className="range-field">
              <div className="range-name-left">Thinking</div>
                <input className="scroll" type="range" min="0" max="200" />
              <div className="range-name-right">Feeling</div>
            </div>
            <div className="range-field">
              <div className="range-name-left">Sensing</div>
                <input className="scroll" type="range" min="0" max="200" />
              <div className="range-name-right">Intuition</div>
            </div>
            <div className="range-field">
              <div className="range-name-left">Judging</div>
                <input className="scroll" type="range" min="0" max="200" />
              <div className="range-name-right">Perceiving</div>
            </div>
            <div className="btn-container">
                <button type="submit" className="previous" onClick={handleClickPrev}>
                    Previous
                </button>
                <button type="submit" className="next" onClick={handleClickNext}>
                    Next
                </button>
            </div>
          </form>
          {/* {persona?.map((item) => (
            <>
              <h1 key={item?.id}>{item.name}</h1>
              <h1 key={item?.id}>{item.age}</h1>
              <h1 key={item?.id}>{item.job}</h1>
              <h1 key={item?.id}>{item.title}</h1>
              <h1 key={item?.id}>{item.industry}</h1>
              <img src={item?.images} alt="" key={item?.id} />
            </>
          ))} */}
        </div>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return { persona: state };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log(ownProps);

  return {
    addPersonalityTitle: (name) => dispatch(addPersonalityTitle(name)),
    addPersonality1: (age) => dispatch(addPersonality1(age)),
    addPersonality2: (job) => dispatch(addPersonality2(job)),
    addPersonality3: (image) => dispatch(addPersonality3(image)),
    addPersonality4: (sex) => dispatch(addPersonality4(sex)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Personality);
