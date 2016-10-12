import React, {Component} from 'react'

//components
import SearchBar from 'SearchBar'
import Logo from 'Logo'

class Nav extends Component{
  constructor(props){
    super(props)
  }

  render(){
    const {onSearchTerm} = this.props

    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <Logo />
        </div>
        <div className="top-bar-right">
          <SearchBar onSearchTerm={(term) => onSearchTerm(term)}/>
        </div>
      </div>
    )
  }
}

export default Nav
