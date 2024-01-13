import React, { Component } from 'react'
 class Start_with_j extends React.Component {

    StartwithJ = () =>{
        const start = this.props.j
        return start.filter(user => user.name[0]==='J')
    }

    namewithJ =(data) =>{
        const output = data.map((info)=>(
            <React.Fragment key={info.id}>
                <li>
                    <span>Id : {info.id} ;</span>
                    <span>Name : {info.name} ;</span>
                    <span>User-Type : {info.user_type} </span>
                </li>
            </React.Fragment>
        ))
        return output
    }

  render() {
    const para = this.StartwithJ()
    return (
        <div>
            <h1>Filter all data starting with j</h1>
            <div>
                <ul>{this.namewithJ(para)}</ul>
            </div>
        </div>
     
    )
  }
}
export default Start_with_j