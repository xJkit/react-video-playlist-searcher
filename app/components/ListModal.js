import React from 'react'

const ListModal = (props) => {
  const {onIsLoadingList, playlist, clickedVideo, onAddVideoToList} = props
  const setVideo = (listId, clickedVideo) => {
    const addedVideo = clickedVideo
    addedVideo.listId = listId
    onAddVideoToList(addedVideo)
    onIsLoadingList(false)
  }
  return(
    <div className="callout warning modal">
      <ul className="menu vertical">
        {playlist.map( list => {
          return (
            <li>
              <button onClick={() => setVideo(list.id, clickedVideo)}>{list.category}</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListModal
