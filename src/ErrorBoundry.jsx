import React, { Component } from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
      super(props)
      this.state = {
         hasError: false
      }
    }
static getDerivedStateFromError(error){
    return{
        hasError: true
    }   
}
  render() {
     if(this.state.hasError){
        return <div>Somthing went wrong</div>
    }
       return this.props.children
  }
}

export default ErrorBoundry;
