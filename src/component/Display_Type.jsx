import React, { Component } from 'react'
class DisplayOnType extends React.Component {

    type_display = () =>{
    const item = this.props.type
        return item.filter(user => user.user_type === 'Designer')
    }

    info = (info) =>{
        const result = info.map((data)=>(
            <React.Fragment key = {data.id}>
                <li>
                    <span>Id : {data.id}</span>
                    <span>Name : {data.name}</span>
                    <span>User-Type : {data.user_type}</span>
                </li>
            </React.Fragment>
        ))
        return result
    }
  render() {
    const parameter = this.type_display()
    return (
      <div>
        <h1>Display based on user type</h1>
        <div>
            <ul>{this.info(parameter)}</ul>
        </div>
      </div>
    )
  }
}
export default DisplayOnType
