"use client";

import React from 'react'
import List from '../component/todos/List'
import Actions from '../component/todos/Actions'

export default function page() {
  return (
    <div>
        <List/>
        <Actions/>
    </div>
  )
}
