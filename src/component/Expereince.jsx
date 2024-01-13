import React, { Component } from 'react'
 class Experience extends React.Component {
    experience =()=>{
        const data = this.props.experience
        const type = data.filter(user => user.user_type === 'Designer' )
        const exp = type.map(type => type.years)
        const totalexp = exp.reduce((total,expe)=> total + expe, 0)
        return totalexp
    }
  render() {
    return (
      <div>
        <h1>Find the total years of the designer</h1>
        <p>{this.experience()}</p>
      </div>
    )
  }
}

export default Experience
