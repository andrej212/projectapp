import React from 'react'

function SearchBar({ value, onSearch }) {
  return (
    <div className='flex flex-col items-center mt-12 mb-12 w-full'>
      <h1 className='text-2xl'>Search Users</h1>
      <input
        value={value}
        onChange={(event) => onSearch(event.target.value)}
        placeholder='Search by name, username, email, city, or company'
        className='w-full max-w-xl border border-gray-300  px-4 py-3'
      />
    </div>
  )
}

export default SearchBar