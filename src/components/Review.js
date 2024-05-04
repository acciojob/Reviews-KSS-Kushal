import React, { useState } from 'react'
import { data } from './data';

const Review = () => {
    const [currReview, setCurrReview] = useState(data[0]);
    const [index, setIndex] = useState(0);

    const prev = () => {
        if(index>0){
            setCurrReview(data[index-1]);
            setIndex(p=>p-1);
        }else{
            setCurrReview(data[data.length-1]);
            setIndex(data.length-1);
        }
    }
    const next = () => {
        if(index<data.length-1){
            setCurrReview(data[index+1]);
            setIndex(p=>p+1);
        }else{
            setCurrReview(data[0]);
            setIndex(0);
        }
    }
    const random = () => {
        const idx = Math.floor(Math.random()*(data.length-1));
        setCurrReview(data[idx]);
        setIndex(idx);
    }

  return (
    <div className="review">
        <p className="author" id={`author-${currReview.id}`}>{currReview.name}</p>
        <p className="job">{currReview.job}</p>
        <p className="info">{currReview.text}</p>
        <img src={currReview.image} alt="" className="person-img" />
        <button className='prev-btn' onClick={prev}>Prev</button>
        <button className='next-btn' onClick={next}>Next</button>
        <button className='random-btn' onClick={random}>surprise me</button>
    </div>
  )
}

export default Review