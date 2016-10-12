import React, {Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return(
      <ul className="menu">
        <li>
          <input type="text" placeholder="請輸入關鍵字" ref="searchText" />
        </li>
        <li>
          <button
            className="button rounded"
            onClick={(evt) => this.onSearchBegins(evt)}
            >搜尋</button>
        </li>
      </ul>
    )
  }

  onSearchBegins() {
    let searchText = this.refs.searchText.value
    console.log(`You search ${searchText}`)
    if (searchText.length > 0){
      this.refs.searchText.value = ''
      this.props.onSearchTerm(searchText)
    } else{
      this.refs.searchText.focus()
    }
  }
}

export default SearchBar
