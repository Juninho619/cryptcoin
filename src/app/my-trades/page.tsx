import Header from '@/components/Header'
import MyTrades from '@/components/user/MyTrades'
import React from 'react'

const page = () => {
  return (
    <div>
      <Header/>
      <h2>Trade History</h2>
      <MyTrades/>
    </div>
  )
}

export default page