import React from 'react'
import DisplayListDetail from 'DisplayListDetail'

const DisplayList = (props) => {
  const {videos, addedVideos, playlist} = props
  return(
    <div>
      {videos.map( (video, index) => (
        <DisplayListDetail
          {...video}
          key={index}
          addedVideos={addedVideos}
          playlist={playlist} 
        />)
      )}
    </div>
  )
}

export default DisplayList
