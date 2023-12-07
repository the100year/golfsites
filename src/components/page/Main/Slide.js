import React from 'react';
import './slide.css'
const Slide = ({ title, period, location, img }) => (
  <div className="Main_event_left_slide">
    <h4>{title}</h4>
    <p>기간: {period}</p>
    <p>장소: {location}</p>
  </div>
);

export default Slide;