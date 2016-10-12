import React, { Component } from 'react'
import YTSearch from 'YTSearchApi'

// Components
import Nav from 'Nav'
import PlayList from 'PlayList'
import Display from 'Display'
import DisplayList from 'DisplayList'

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      playlist: [{
          id: 1,
          category: '中文歌曲'
        },{
          id: 2,
          category: '英文歌曲'
        },{
          id: 3,
          category: '韓文歌曲'
        }],
      addedVideos: [{
        listId: 1,
        videoId: '0YHx01yH-t4',
        title: '[甜約翰] Angelina',
        description: '好歌！'
      },{
        listId: 1,
        videoId: '5VfMdqkQwDo',
        title: '[甜約翰] 走',
        description: '為宅男發聲的最新力作'
      },{
        listId: 3,
        videoId: '6pA_Tou-DPI',
        title: '[少女時代] The Boys',
        description: '少女時代的最新力作'
      }],
      isLoading: false
    }
  }


  render() {
    const {playlist, videos, isLoading, addedVideos} = this.state
    const renderDisplayWall = () => {
      if (isLoading){
        return (
          <div>讀取中.....</div>
        )
      } else if (videos){
        return (
          <div>
            <DisplayList
              videos={videos}
              addedVideos={addedVideos}
              playlist={playlist}
            />
          </div>
        )
      } else {
        return (<div>首頁！！！</div>)
      }
    }

    return(
      <div className="container">
        <div className="row">
          <Nav onSearchTerm={(term) => this.handleSearchTerm(term)}/>
        </div>
        <div className="row">
          <div className="small-4 columns">
            <PlayList
              playlist={playlist}
              addedVideos={addedVideos}
              onAddPlayList={(text) => this.handleAddPlayList(text)}
            />
          </div>
          <div className="small-8 columns">
            {renderDisplayWall()}
          </div>
        </div>
      </div>
    )
  }

  //-----hepler functions------
  // PlayList > AddPlayList
  handleAddPlayList(text) {
    const {playlist} = this.state
    const playlistQt = playlist.length
    const playlistNew = playlist.concat({
      id: playlistQt + 1,
      category: text
    })
    this.setState({playlist: playlistNew})
  }
  // Nav > SearchBar
  handleSearchTerm(term){
    this.setState({isLoading: true})
    YTSearch(term)
      .then( (videos) => {
        this.setState({
          videos: videos,
          isLoading: false
        })
    }).catch( (err) =>{
      console.log(`YTSearch Error: ${err}`)
    })
  }


  // Display > DisplayList > DisplayListDetail
  handleAddVideoToList(addedVideo){
    // addedVideo = {listId, videoId, title, description}
    const addedVideosNew = addedVideos.concat(addedVideo)
    //先寫死加入第一個播放清單
    this.setState({
      addedVideos: addedVideosNew
    })
  }
}

export default Main
