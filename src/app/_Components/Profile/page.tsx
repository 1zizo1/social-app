'use client'
import React from 'react'
import {State} from '../../../interfaces/state'
import { useDispatch, useSelector } from 'react-redux'
import { decrease, increamentByAmount, increase } from '@/lib/counterslice'
export default function Profile() {
let dispatch =useDispatch<any>();
    let{counter} = useSelector((state:State)=>state.counter)
  return (
    <>
      <h1>Profile page</h1>
      <div className="bg-green-500 flex gap-2 justify-center items-center w-1/2 mx-auto">
      <button onClick={ ()=>dispatch (increase())}>+</button>
        <h1>
        Counter: {counter}
        </h1>
        <button onClick={ ()=>dispatch (decrease())}>-</button>

        <button onClick={ ()=>dispatch (increamentByAmount(10))}>-</button>
      </div>
    </>
  )
}
 