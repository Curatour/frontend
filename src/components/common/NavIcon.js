import React from 'react'

const NavIcon = ({image}) => {
  return (
    <img 
      src={image}
      style={{
        height="50px",
        width="50px"
    }}/>
  );
}

export default NavIcon;