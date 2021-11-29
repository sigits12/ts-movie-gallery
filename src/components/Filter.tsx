import React, { ChangeEvent, FC, useState } from 'react';

const Filter:FC = () => {

  const [filterValue, setFilterValue] = useState<string>("")
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(event.target.value)
  }

  return(
    <div><input type="text" placeholder="Filter..." onChange={handleChange}/></div>
  )
}

export default Filter;