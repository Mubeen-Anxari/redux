
import React from 'react'
import { useAppSelector } from './hooks/hooks'

export default function page() {
  const user = useAppSelector(state=>state.userSlice.entities)
  return (
    <div>page</div>
  )
}
