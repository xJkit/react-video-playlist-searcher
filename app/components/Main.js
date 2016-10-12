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
        }
      ],
      isLoading: false
    }
  }


  render() {
    let {playlist, videos, isLoading} = this.state
    const renderDisplayWall = () => {
      if (isLoading){
        return (
          <div>讀取中.....</div>
        )
      } else if (videos){
        return (
          <div>
            <DisplayList videos={videos}/>
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
            <PlayList playlist={playlist}/>
          </div>
          <div className="small-8 columns">
            {renderDisplayWall()}
          </div>
        </div>
      </div>
    )
  }

  //hepler functions
  handleAddPlayList(text) {
    let {playlist} = this.state
    const playlistQt = playlist.length
    const playlistNew = playlist.concat({
      id: playlistQt + 1,
      category: text
    })
    this.setState({playlist: playlistNew})
  }

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
}

export default Main
