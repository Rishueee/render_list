import React from 'react'

class Displayall extends React.Component{
    display_all = (info) =>{
        const AllData = info.map((info)=>(
            <React.Fragment key={info.id}>
                <li>
                <span>Id: {info.id}, </span>
                <span>Name: {info.name}, </span>
                <span>User type: {info.user_type}</span>
                </li>
                
            </React.Fragment>
        ))
        return AllData
    }
    render(props){
        const value = this.props.All
        return(
            <>
                 <h1>Display all items</h1>
                 <div>
                    <ul>{this.display_all(value)}</ul>
                 </div>
            </>
           
        )
    }

}
export default Displayall