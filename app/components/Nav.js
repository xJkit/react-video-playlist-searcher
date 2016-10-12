import React, {Component} from 'react'

//components
import SearchBar from 'SearchBar'
import Logo from 'Logo'

class Nav extends Component{
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <Logo />
        </div>
        <div className="top-bar-right">
          <SearchBar />
        </div>
      </div>
    )
  }
}

export default Nav
