import React from 'react';

function SocialIcon({ link, icon, label }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className=" mr-4">
      <i className={icon} aria-hidden="true"></i>
      <span className="sr-only bg-white">{label}</span>
    </a>
  );
}

export default SocialIcon;
