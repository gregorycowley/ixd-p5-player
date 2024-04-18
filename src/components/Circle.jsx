// Circle.js
import React, { useState, useRef } from 'react';
import styled from 'styled-components';

const StyledCircle = styled.div`
  
  position: absolute;
  width: 150px;
  height: 150px;
  background-color: blue;
  border-radius: 50%;
  cursor: pointer;
`;

const Circle = ({ id, initialX, initialY, onDrag }) => {

  console.log(id, initialX, initialY, onDrag );

  const [position, setPosition] = useState({ x: initialX, y: initialY });
  let startX;
  let startY;
  const myRef = useRef(null);

  const onMouseDown = (e) => {
    console.log(e);
    startX = e.clientX;
    startY = e.clientY;

    console.log('onMouseDown');
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const onMouseMove = (moveEvent) => {
    const newX = position.x + moveEvent.clientX - startX;
    const newY = position.y + moveEvent.clientY - startY;
    setPosition({ x: newX, y: newY });

    console.log('onMouseMove :: ', newX);
    console.log(myRef.current.style);

    // myRef.current.style.top =  position.y;
    // myRef.current.style.left =  position.x;
    // onDrag(id, newX, newY);
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  return (
    <div 
      ref={ myRef } 
      onMouseDown={onMouseDown}
      style={{
        position: 'absolute',
        border: 'thin solid red', 
        width: '150px',
        height: '150px',
        top: position.y, 
        left: position.x}}>
      <StyledCircle
      
      ></StyledCircle>
    </div>
  );
};

export default Circle;