import React from 'react';
import './Picture.scss';  // Đảm bảo bạn có file CSS để tạo kiểu

function Picture() {
  const link = "https://wttoday.vercel.app";  // Link của bạn
  const imageUrl = "https://www.iconfinder.com/icons/4102326/cloud_sun_sunny_weather_icon";  // URL ảnh đại diện của bạn
  const title = "React App";
  const description = "Web site created using create-react-app";

  return (
    <div className="link-preview">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="link-preview-card">
          <img src={imageUrl} alt={title} className="link-preview-image" />
          <div className="link-preview-content">
            <h3>{title}</h3>
            <p>{description}</p>
            <span>{link}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Picture;
