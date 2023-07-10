'use client'

import { useState } from 'react'
import data from '@/data/data.json'

export const Filter = () => {
  return (
    <div className='absolute flex w-9/12 h-full bg-white rounded-md shadow-lg shadow-darkcyan/40'>
      <div className='flex flex-wrap items-center justify-center h-full'>
        <h2 className='p-4 text-black'>Filter</h2>
      </div>

      <div className='flex flex-col items-center justify-center h-full p-4 border-l'>
        <p className='text-black'>Clear</p>
      </div>
    </div>
  )
}

export default Filter
