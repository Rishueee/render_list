import React, { Component } from 'react'
 class Age extends React.Component {
    age =()=>{
        const data = this.props.Age
        return data.filter(user => user.age>28 && user.age <= 50 )
    }

    result = (data) =>{
        const aged = data.map((data)=>(
            <React.Fragment key={data.id}>
                
                <span>Id: {data.id}, </span>
                <span>Name: {data.name}, </span>
                <span>User type: {data.user_type}</span>
            
            </React.Fragment>
        ))
        return aged
    }
    render(){
        const graph = this.age()
        return (
            <div>
              <h1>Filter all data based on age greater than 28 and less than or equal to 50</h1>
              <div>
                  <ul>{this.result(graph)}</ul>
              </div>
            </div>
          )
        }
     }

export default Age