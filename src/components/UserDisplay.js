import React from 'react'
import axios from 'axios'
import {NavLink, Route, Switch} from 'react-router-dom'


class UserDisplay extends React.Component{

    //set data in state :: mydata
    state = {
        mydata : []
    }

    //get data from student table
    componentDidMount(){
        axios.get("http://localhost:3030/students_url").then(res=>{
            console.log(res)
            this.setState({
                mydata:res.data
            })
        })
    }

    deleteData = (id) =>{
         //alert(id)
        axios.delete("http://localhost:3030/deletestudent/"+id)
    }

    render(){
        
        const mydata222 = this.state.mydata.map(hlists=>{

            return(

                <div className = "colspan">
        <p>Name:  {hlists.name}</p> 
            <p>Age:  {hlists.age}</p>
        <p>Student ID:  {hlists.studentId}</p>
         
        <button onClick={()=>this.deleteData(hlists._id)}>Delete</button>
        <NavLink to={"/UserUpdate/"+hlists._id}>Update</NavLink>

          
                </div>
            )
        })

        return(
            <section>
                <div className="container">
                     {mydata222}
                </div>
            </section>
        )
        
    }
}


export default UserDisplay