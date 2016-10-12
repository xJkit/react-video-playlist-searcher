import React, { Component } from 'react'

// Components
import Nav from 'Nav'
import PlayList from 'PlayList'
import Display from 'Display'

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
      searchDataMock: [
        {
          id: 1,
          title: '周杰倫 [不該] Official MV',
          description: '今年華語樂壇最震撼的深情對唱歌曲'
        }, {
          id: 2,
          title: '周杰倫 [陽光宅男]',
          description: '最新單曲 "陽光宅男" 對整天窩在家裡的男人發聲! '
        }
      ]
    }
  }

  render() {
    let {playlist} = this.state

    return(
      <div className="container">
        <div className="row">
          <Nav />
        </div>
        <div className="row">
          <div className="small-4 columns">
            <PlayList playlist={playlist}/>
          </div>
          <div className="small-8 columns">
            <Display children={this.props.children}/>
          </div>
        </div>
      </div>
    )
  }


  handleAddPlayList(text) {
    let {playlist} = this.state
    const playlistQt = playlist.length
    const playlistNew = playlist.concat({
      id: playlistQt + 1,
      category: text
    })
    this.setState({playlist: playlistNew})
  }
}

export default Main
