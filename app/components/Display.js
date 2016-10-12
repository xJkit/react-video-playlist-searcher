import React, {Component} from 'react'

class Display extends Component{
  constructor(props){
    super(props)
  }

  render(){
    let {children} = this.props
    return(
      <div>
        <p>Display Wall</p>
        {children}
      </div>
    )
  }
}

export default Display
