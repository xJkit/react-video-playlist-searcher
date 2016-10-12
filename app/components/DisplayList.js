import React from 'react'
import DisplayListDetail from 'DisplayListDetail'

const DisplayList = (props) => {
  const {videos, addedVideos, playlist, onIsLoadingList, isLoadingList, onClickedVideo} = props
  return(
    <div>
      {videos.map( (video, index) => (
        <DisplayListDetail
          {...video}
          key={index}
          addedVideos={addedVideos}
          playlist={playlist}
          isLoadingList={isLoadingList}
          onIsLoadingList={(Bool) => onIsLoadingList(Bool)}
          onClickedVideo={(video) => onClickedVideo(video)}
        />)
      )}
    </div>
  )
}

export default DisplayList
