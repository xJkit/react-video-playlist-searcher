import React from 'react'
import DisplayListDetail from 'DisplayListDetail'

const DisplayList = (props) => {
  const {videos} = props
  return(
    <div>
      {videos.map( (video, index) => <DisplayListDetail {...video} key={index}/> )}
    </div>
  )
}

export default DisplayList
