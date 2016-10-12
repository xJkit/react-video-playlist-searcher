import React from 'react'

const DisplayListDetail = (props) => {
  const { id:{videoId}, snippet:{title, description}, snippet, addedVideos, playlist, isLoadingList, onIsLoadingList, onClickedVideo} = props
  const imgUrl = snippet.thumbnails.high.url
  //如同 https://i.ytimg.com/vi/z_jdiU47bFA/hqdefault.jpg
  const setVideo = (title, description, videoId) => {
    const clickedVideo = {
      title: title,
      description: description,
      videoId: videoId
    }
    onIsLoadingList(true)
    onClickedVideo(clickedVideo)
  }
  const renderButton = (_addedVideos, _videoId) => {
    const listIds = _addedVideos.map( (addedVideo) => addedVideo.listId )
    const videoIds = _addedVideos.map( (addedVideo) => addedVideo.videoId )
    if (videoIds.indexOf(_videoId) < 0){
      //尚未加入播放清單
      return (<button onClick={() => setVideo(title, description, videoId)} className="button primary hollow ready-to-add"> + 加入播放清單</button>)
    } else {
      //已經加入播放清單
      return(<button className="button primary already-added"> 已加入清單 </button>)
    }
  }

  // const renderPlaylist = (_playlist) => {
  //   if (isLoadingList){
  //     return _playlist.map( (theList) => <button className="add-list-btn">{theList.category}</button>)
  //   }
  // }

  return (
    <div>
      <div className="row">
        <div className="columns small-4">
          <img src={imgUrl} alt=""/>
        </div>
        <div className="columns small-8">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
      <div className="row">
        <div className="columns small-12 text-center options onClick={()=>console.log('click')}">
          <div className="row">{renderButton(addedVideos, videoId)}</div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default DisplayListDetail
