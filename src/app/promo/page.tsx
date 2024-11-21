import Header from '@/components/Header'
import CreatePromoModal from '@/components/modal/CreatePromoModal'
import PromoGrid from '@/components/promoCode/PromoGrid'
import React from 'react'

function page() {
  return (
    <div>
        <Header/>
        <div className='flex items-end'>
          <CreatePromoModal/>
        </div>
        <PromoGrid/>
    </div>
  )
}

export default page