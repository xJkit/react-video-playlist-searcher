import React, {Component} from 'react'

class PlayList extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {playlist} = this.props
    const renderList = (items) => (
      items.map( item => (
          <li key={item.id}>
            <a href="#">{item.category}</a>
          </li>
        )
      )
    )

    return(
      <div>
        <h3>播放清單</h3>
        <ul className="menu vertical">
          {renderList(playlist)}
          <li>
            <ul className="menu">
              <li>
                <input type="text" placeholder='新增播放清單' ref="playlistName" />
              </li>
              <li>
                <button className="button hollow" onClick={(evt) => this.onAddPlayListbBegins(evt)}>新增</button>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    )
  }

  //helper functions
  onAddPlayListbBegins(evt) {
    let tempName = this.refs.playlistName.value
    if (tempName.length > 0){
      this.refs.playlistName.value = ''
      this.props.onAddPlayList(tempName)
    } else {
      this.refs.playlistName.focus()
    }

  }

}

export default PlayList
