import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { addTitle, addIndustry } from '../store';
import { connect } from 'react-redux';

import '../css/TitleIndustry.css';

function TitleIndustry({persona, addTitle, addIndustry}) {

    const [title, setTitle] = useState("");
    const [industry, setIndustry] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTitle(title);
        addIndustry(industry);
    }

    const navigate = useNavigate();

    const handleClickNext = () => {
        navigate('/profile');
    }

    const handleClickPrev = () => {
        navigate('/');
    }

  return (
      <div className="titleIndustry-container">
        {/* <h1>Persona title & Select industry</h1> */}
        <div className='progressBar'>
            <div 
                style={{width: <TitleIndustry /> ? "16.6%" : ""}}
            />
        </div>
            <form className="second-container" onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>What's the title of this persona?
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    /></label>
                    <label>What type of industry you are looking for?
                    <input
                        type="text"
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                    /></label>
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
       
        
        {/* <Link></Link> */}
      </div>
  );
}

const mapStateToProps = (state) => {
    return { persona: state }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addTitle: text => dispatch(addTitle(text)),
        addIndustry: text => dispatch(addIndustry(text))
    }
}

export default connect(mapDispatchToProps, mapStateToProps)(TitleIndustry);
