"use client"
import React, { useEffect } from 'react'
import { gsap } from 'gsap'


const Cursor = () => {
    useEffect(() => {
        const cursor = document.getElementById("custom-cursor")
        const links = document.querySelectorAll('a')
        const onMouseMove = (event) => {
            const {clientX, clientY} = event
            gsap.set(cursor, {x: clientX, y: clientY})
        }

        const onMouseEnterLink = () => {
            gsap.to(cursor, {scale: 2})
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {scale: 1})
        };

        document.addEventListener('mousemove', onMouseMove)

        links.forEach(link => {
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        });
        document.addEventListener('mousemove', onMouseMove)
    })
    return(
        <div id ="custom-cursor" className ="custom-cursor">

        </div>
    )
}

export default Cursor