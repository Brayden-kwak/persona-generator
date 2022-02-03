import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ImageUploading from 'react-images-uploading';
import {addName, addAge, addJob, addImage, addSex} from '../store';

import '../css/Profile.css';

function Profile({persona}) {

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
    
  return (
      <>
        <div className="container">
            <div className='progressBar'>
                <div 
                    style={{width: <Profile /> ? "66.6%" : ""}}
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
                    {persona?.map((item) => (
                        <>
                            <h1 key={item?.id}>{item.name}</h1>
                            <h1 key={item?.id}>{item.age}</h1>
                            <h1 key={item?.id}>{item.job}</h1>
                            <img src={item?.images} alt="" key={item?.id}/>
                        </>
                    ))}
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
        addName: text => dispatch(addName(text)),
        addAge: text => dispatch(addAge(text)),
        addJob: text => dispatch(addJob(text)),
        addSex: text => dispatch(addSex(text)),
        addImage: text => dispatch(addImage(text))
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