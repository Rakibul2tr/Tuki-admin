import React, { useEffect } from 'react';
import { pushToDataLayer } from '../gtmEvents';

const MyButton = () => {
  const handleButtonClick = () => {
    pushToDataLayer({
      event: 'button_click',
      category: 'user_interaction',
      action: 'click',
      label: 'my_button'
    });
  };

  useEffect(() => {
    // Call handleButtonClick when the component mounts
    handleButtonClick();
  }, []); 

  return <></>;
};

export default MyButton;