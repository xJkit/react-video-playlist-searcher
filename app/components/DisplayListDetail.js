import React from 'react'

const DisplayListDetail = (props) => {
  const { id:{videoId}, snippet:{title, description}, snippet } = props
  const imgUrl = snippet.thumbnails.high.url
  //如同 https://i.ytimg.com/vi/z_jdiU47bFA/hqdefault.jpg

  return (
    <div className="row">
      <div className="columns small-4">
        <img src={imgUrl} alt=""/>
      </div>
      <div className="columns small-8">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div> 
  )
}

export default DisplayListDetail
