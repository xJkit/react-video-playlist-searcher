import React from 'react'

const DisplayListSimple = (props) => {
  const {listId, addedVideos} = props
  const listVideos = addedVideos.filter( (addedVideo) => listId == addedVideo.listId )

  let renderListVideos = () => {
    return listVideos.map( (listVideo,index) => {
        const EMBED_URL = 'https://youtube.com/embed/${listVideo.videoId}'
        return(
          <div className="row" key={index}>
            <h3>{listVideo.title}</h3>
            <p>{listVideo.description}</p>
            <hr/>
          </div>
          )
        })

  }

  return (
    <div>
      {renderListVideos()}
    </div>
  )

}

export default DisplayListSimple
