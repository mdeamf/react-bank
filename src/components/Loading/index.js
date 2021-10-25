import React from 'react';
import { useSelector } from 'react-redux';
import './styles.css';

const Loading = () => {
  const { showLoading } = useSelector((state) => state.loading);

  if (showLoading) {
    return (
      <div className="Loading">
        <p>Loading...</p>
      </div>
    );
  } else {
    return null;
  }
};

export default Loading;
