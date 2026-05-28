import React from 'react'
import SearchBar from './SearchBar'

function Header({ searchQuery, onSearch }) {
  return <SearchBar value={searchQuery} onSearch={onSearch} />
}

export default Header