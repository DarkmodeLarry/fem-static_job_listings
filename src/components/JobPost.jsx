'use client'

import React, { useState } from 'react'
import jobListings from '@/data/data.json'
import Image from 'next/image'
import IconRemove from './IconRemove'
import { cn } from '@/lib/utils'

export const JobPost = () => {
  const [filters, setFilters] = useState([])

  const handleFilterClick = (tag) => {
    if (!filters.includes(tag)) {
      setFilters([...filters, tag])
    }
  }

  const handleRemoveTag = (tag) => {
    setFilters(filters.filter((filter) => filter !== tag))
  }

  const clearAllFilters = () => {
    setFilters([])
  }

  const filteredJobListings = jobListings.filter((job) =>
    filters.every(
      (filter) =>
        job.role === filter ||
        job.level === filter ||
        job.languages.includes(filter) ||
        job.tools.includes(filter)
    )
  )

  return (
    <>
      <div
        className={cn(
          'flex justify-between w-[330px] text-[15px] h-full -translate-y-5 bg-transparent',
          filters.length === 0 ? '' : 'bg-white'
        )}
      >
        <div className='flex flex-wrap p-4'>
          {filters.map((filter, index) => (
            <>
              <div className='flex items-center justify-center m-2 rounded-l-md bg-lightGrayishCyan'>
                <p
                  key={index}
                  className='flex items-center justify-center px-3 font-semibold rounded-md text-darkcyan '
                >
                  {filter}
                </p>
                <span
                  onClick={() => handleRemoveTag(filter)}
                  className='p-2 text-white cursor-pointer bg-darkcyan rounded-r-md hover:bg-veryDarkGrayishCyan'
                >
                  <IconRemove className='flex cursor-pointer ' />
                </span>
              </div>
            </>
          ))}
        </div>
        {filters.length > 0 && (
          <div className='flex '>
            <p
              onClick={() => setFilters([])}
              className='flex items-center w-24 justify-center text-[15px] font-light cursor-pointer text-darkGrayishCyan'
            >
              Clear
            </p>
          </div>
        )}
      </div>
      {filteredJobListings.map((post) => (
        <div
          className={`relative flex flex-col items-center min-w-[330px] max-h-[260px] sm:max-w-sm my-6 mx-2 bg-white rounded-md shadow-lg shadow-darkcyan/40 ${
            post.postedAt === '1d ago' && 'border-darkcyan border-l-4'
          } ${filters && 'pt-9}'} `}
          key={post.id}
        >
          <div className='w-[280px] mt-12 mb-6'>
            <div className='absolute -top-6 text-darkcyan'>
              <Image
                src={post.logo}
                alt={post.company}
                width={50}
                height={50}
                priority
                className='sm:h-24 sm:w-24'
              />
            </div>
            <div className='flex gap-4'>
              <p className='pr-2 text-sm font-thick text-darkcyan'>{post.company}</p>

              {post.new === true && (
                <p className='flex flex-col items-center justify-center h-6 text-sm font-semibold uppercase rounded-[14px] bg-darkcyan text-neutral-100 px-2 pt-[1px]'>
                  new!
                </p>
              )}

              {post.featured === true && (
                <p className='flex flex-col items-center justify-center h-6 text-sm font-semibold uppercase rounded-[14px] bg-veryDarkGrayishCyan text-neutral-100 px-2 pt-[1px]'>
                  featured
                </p>
              )}
            </div>
            <div className='flex'>
              <p className='my-2 text-sm tracking-normal text-veryDarkGrayishCyan font-thick'>
                {post.position}
              </p>
            </div>
            <div className='flex w-10/12'>
              <p className='font-light text-gray-400'>
                {post.postedAt} • {post.contract} • {post.location}
              </p>
            </div>

            <div className='flex items-center justify-center w-full mt-3 mb-4 text-center border-b divider border-b-gray-300'></div>
            <div className='flex flex-wrap w-10/12 h-full gap-4'>
              <p
                onClick={() => handleFilterClick(post.role)}
                className='flex h-full px-2 font-semibold pt-[2px] rounded-md cursor-pointer bg-lightGrayishCyan text-darkcyan'
              >
                {post.role}
              </p>
              <p
                onClick={() => handleFilterClick(post.level)}
                className='flex h-full px-2 font-semibold pt-[2px] rounded-md cursor-pointer bg-lightGrayishCyan text-darkcyan'
              >
                {post.level}
              </p>
              {post.tools.map((tool, i) => (
                <p
                  key={i}
                  onClick={() => handleFilterClick(tool)}
                  className='flex h-full px-2 font-semibold pt-[2px] rounded-md cursor-pointer bg-lightGrayishCyan text-darkcyan'
                >
                  {tool}
                </p>
              ))}
              {post.languages.map((language, i) => (
                <p
                  key={i}
                  onClick={() => handleFilterClick(language)}
                  className='flex h-full px-2 font-semibold pt-[2px] rounded-md cursor-pointer bg-lightGrayishCyan text-darkcyan'
                >
                  {language}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default JobPost
