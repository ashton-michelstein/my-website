"use client"
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
  const [isCursorWorking, setIsCursorWorking] = useState(true);

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");
    const links = document.querySelectorAll('a');

    const onMouseMove = (event) => {
      const { clientX, clientY } = event;
      gsap.set(cursor, { x: clientX, y: clientY });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, { scale: 2 });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, { scale: 1 });
    };

    document.addEventListener('mousemove', onMouseMove);

    links.forEach(link => {
      link.addEventListener('mouseenter', onMouseEnterLink);
      link.addEventListener('mouseleave', onMouseLeaveLink);
    });

    const checkCursorPosition = setTimeout(() => {
      const cursorPosition = cursor.getBoundingClientRect();
      setIsCursorWorking(cursorPosition.x !== 0 && cursorPosition.y !== 0);
    }, 1000)

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      links.forEach(link => {
        link.removeEventListener('mouseenter', onMouseEnterLink);
        link.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      clearTimeout(checkCursorPosition);
    };
  }, []);

  return (
    <>
      {isCursorWorking ? (<div id="custom-cursor" className="custom-cursor"></div>) : (<div className="default-cursor"></div>)}
    </>
  );
};

export default Cursor;
