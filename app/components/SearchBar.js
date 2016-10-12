import React, {Component} from 'react'

class SearchBar extends Component{
  constructor(props){
    super(props)
  }

  render(){

    return(
      <ul className="menu">
        <li>
          <input type="text" placeholder="請輸入關鍵字" ref="SearchText" />
        </li>
        <li>
          <button className="button rounded" type="submit">搜尋</button>
        </li>
      </ul>
    )
  }
}

export default SearchBar
