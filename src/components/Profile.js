import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import {addName, addAge, addJob, addImage, addSex} from '../store';

import '../css/Profile.css';

function Profile({persona, addName, addAge, addJob, addImage, addSex}) {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [job, setJob] = useState("");
    const [sex, setSex] = useState("");
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        addName(name);
        addAge(age);
        addJob(job);
        addImage(images);
        addSex(sex);
        setName("");
        setAge("");
        setJob("");
        setSex("");
    }

    const onChange = (event) => {
        const reader = new FileReader();
        const file = event.target.files[0];

        if(file){
            reader.onloadend = () => 
                setImages(reader.result);
            reader.readAsDataURL(file);
            setImages(event.target.files[0]);
        } else {
            alert('File uploaded is not valid');
        }
      }
    
      const navigate = useNavigate();

      const handleClickNext = () => {
          navigate('/personality');
      }
  
      const handleClickPrev = () => {
          navigate('/');
      }

  return (
      <>
        <div className="container">
            <div className='progressBar'>
                <div 
                    style={{width: <Profile /> ? "33.3%" : ""}}
                />
            </div>
                <div className="second-container">
                    <form className="input-containers" onSubmit={handleSubmit}>
                        <div className="img-containers">
                        {images && (
                            <label className="img-preview-box">
                                <img 
                                    src={images}
                                    alt=""
                                    className="img-preview"
                                />
                            </label>
                        )}
                            <label className="custom-file-upload"> Upload image                   
                                <input 
                                    type="file"
                                    name="images"
                                    className="img-btnBox" 
                                    onChange={onChange}
                                />
                            </label>
                        </div>
                        <div className="inputBox">
                            <label> Name
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e)=>setName(e.target.value)}
                                /></label>
                            <label> Age
                            <input
                                type="text"
                                value={age}
                                onChange={(e)=>setAge(e.target.value)}
                            /></label>
                            <label> Job
                            <input
                                type="text"
                                value={job}
                                onChange={(e)=>setJob(e.target.value)}
                            /></label> 
                            <label> Sex
                            <input
                                type="text"
                                value={sex}
                                onChange={(e)=>setSex(e.target.value)}
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
        addName: name => dispatch(addName(name)),
        addAge: age => dispatch(addAge(age)),
        addJob: job => dispatch(addJob(job)),
        addImage: image => dispatch(addImage(image)),
        addSex: sex => dispatch(addSex(sex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);


// <ImageUploading
                    //     multiple
                    //     value={images}
                    //     onChange={onChange}
                    //     maxNumber={maxNumber}
                    //     dataURLKey="data_url"
                    // >
                    //     {({
                    //         imageList,
                    //         onImageUpload,
                    //         onImageRemoveAll,
                    //         onImageUpdate,
                    //         onImageRemove,
                    //         isDragging,
                    //         dragProps,
                    //     }) => (
                    //         <div className="image-wrapper">
                    //             <button
                    //                 style={isDragging ? { color: 'red' } : undefined}
                    //                 onClick={onImageUpload}
                    //                 {...dragProps}
                    //             >
                    //             Click or Drop here
                    //             </button>
                    //             {imageList.map((image, index) => (
                    //                 <div key={index} className="image-item">
                    //                     <img src={image['data_url']} alt="" width="100" />
                    //                     <div className="image-item__btn-wrapper">
                    //                     <button onClick={() => onImageUpdate(index)}>Update</button>
                    //                     <button onClick={() => onImageRemove(index)}>Remove</button>
                    //                     </div>
                    //                 </div>
                    //             ))}
                    //         </div>
                    //     )}
                    //     </ImageUploading> 