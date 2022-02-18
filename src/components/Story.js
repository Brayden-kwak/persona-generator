import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStory, addKeywords } from '../store';
import "../css/Story.css";

function Story({ persona, addStory, addKeywords }) {

    const [input, setInput] = useState("");
    const [tags, setTags] = useState([]);
    const [isKeyReleased, setIsKeyReleased] = useState(false);
    const [story, setStory] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addStory(story);
        addKeywords(tags);
    }

    const onChange = (e) => {
        const { value } = e.target;
        setInput(value);
    }

    const onKeyDown = (e) => {
        const { key } = e;
        const trimmedInput = input.trim();

        if(key === 'Enter' && trimmedInput.length && !tags.includes(trimmedInput)){
            e.preventDefault();
            setTags(state => [...state, trimmedInput]);
            setInput('');
        }

        if(key === "Backspace" && !input.length && tags.length && isKeyReleased){
            e.preventDefault();
            const tagsCopy = [...tags];
            const poppedTag = tagsCopy.pop();

            setTags(tagsCopy);
            setInput(poppedTag);
        }
        setIsKeyReleased(false);
    };

    const onClick = (e) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        setTags(state => [...state, trimmedInput]);
    }

    const onKeyUp = () => {
        setIsKeyReleased(true);
    }
 
    const deleteTag = (index) => {
        setTags(state => state.filter((tag, i) => i !== index))
    }

    const navigate = useNavigate();
    const handleClickNext = () => {
        navigate('/story');
    }
    const handleClickPrev = () => {
        navigate('/goal');
    }

  return (
      <>   
        <div className="container">
        <div className="progressBar">
          <div style={{ width: <Story /> ? "83.3%" : "" }} />
        </div>
        <div className="second-container">
          <form className="form-containers" onSubmit={handleSubmit}>
            <div className="text-container">
                <h2>User Story</h2>
                <textarea 
                    value={story} 
                    onChange={(e) => setStory(e.target.value)}
                    className="text-area" 
                    placeholder="Write the user story..." 
                />
            </div>
            <div className="tag-parents">
                <h2>Keywords</h2>
                <div className="tag-container">
                    {tags.map((tag, index) => 
                        <div className="tag">
                            {tag}
                            <button onClick={() => deleteTag(index)}>X</button> 
                        </div>
                    )}
                    <input
                        value={input}
                        placeholder="Keyword"
                        onChange={onChange}
                        onKeyDown={onKeyDown}
                        onKeyUp={onKeyUp}
                    />
                    <button className="plus" onClick={onClick}>+</button>
                </div>
            </div>

            {console.log(persona)}
            {persona?.map((item) => (
                <>
                    <h1 key={item?.id} style={{color: "black"}}>{item.addStory}</h1>
                    <h1 key={item?.id} style={{color: "black"}}>{item.addKeywords}</h1>
                </>
            ))} 
            <div className="btn-container">
              <button className="previous" onClick={handleClickPrev}>
                  Previous
              </button>
              <button type="submit" className="next" onClick={handleClickNext}>
                Next    
              </button>     
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
    return {
        addStory: (story) => dispatch(addStory(story)),
        addKeywords: (keywords) => dispatch(addKeywords(keywords))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Story);
