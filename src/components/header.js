import React from 'react';

const Header = (props) => {
  return (
    <div className="App-header">
      <h1 className="text-center">{props.name}</h1>
      <p className="text-center">{props.subscriberCount} subcribers</p>
    </div>
  );
}

export default Header;