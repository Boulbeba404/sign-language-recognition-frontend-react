import React from 'react';

const PageTitle = ({ title, className = '' }) => {
  const defaultStyle = {
    color: 'black',
    fontSize: '25px',
  };

  return (
    <h1 className={className} style={defaultStyle}>
      {title}
    </h1>
  );
};

export default PageTitle;