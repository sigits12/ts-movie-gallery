import React, { ChangeEvent, FC, useState } from 'react';

const Search:FC = () => {

  const [searchValue, setSearchValue] = useState<string>("")
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return(
    <div><input type="text" placeholder="Search..." onChange={handleChange}/></div>
  )
}

export default Search;