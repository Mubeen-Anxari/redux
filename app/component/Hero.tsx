"use client";
import React from 'react'
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { updateTheme } from '../redux/themeSlice';

export default function Hero() {
  const { nmae, address } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch()
const changeTheme = ()=>{
    dispatch(updateTheme("green"))
}
  return (
    <div>
        <p>action</p>
    
    <input type="color" name="" id="" onChange={(e)=>{
    dispatch(updateTheme(e.target.value))

    }} />
    <button onClick={changeTheme} style={{backgroundColor:'red'}} >Change theme</button>
    </div>
  )
}
