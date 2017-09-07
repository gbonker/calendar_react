import React from 'react';

const Header = (props) => {
  return (
    <div className="App-header">
      <h1 className="text-center" tabIndex="0">{props.name}</h1>
      <p className="text-center" tabIndex="0">{props.subscriberCount} subscribers</p>
    </div>
  );
}

export default Header;