import React from 'react'

const SuggestionList = ({item, handleOnClick}) => {
  return (
    <li onClick={()=>handleOnClick(item.firstName)}>
      {item.firstName}
    </li>
  )
}

export default SuggestionList
