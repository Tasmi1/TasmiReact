import React from 'react'
import axios from 'axios'

class UserInsert extends React.Component{

    state = {
        name:"",
        age:"",
        studentId:"",
        password:""
    }

    Register = () =>{
        // alert(this.state.name)

        const data = {
            name : this.state.name,
            age : this.state.age,
            studentId : this.state.studentId,
            password : this.state.password
        }

        axios.post("http://localhost:3030/uploadStudent", data)

    }
    render()
    {

      
        return(
            // <div>
            //   <div>This is my footer</div>
            //   <h1>{this.props.company_address}</h1>
            // </div>

//             <footer class="bg-light py-5">
//            <div class="container">
//       <div class="small text-center text-muted">Copyright &copy; 2019 - Start Bootstrap</div>
//     </div>
//   </footer>

      <div className="row">
        <div className="colspan">
          <p>Register Here</p>
          <p><input type="text" placeholder="name" value={this.state.name} onChange={(event)=>this.setState({name:event.target.value})}/></p>
          <p><input type="text" placeholder="age" value={this.state.age} onChange={(event=>this.setState({age:event.target.value}))}/></p>
          <p><input type="text" placeholder="studentid" value={this.state.studentId} onChange={(event=>this.setState({studentId:event.target.value}))}/></p>
          <p><input type="text" placeholder="password" value={this.state.password} onChange={(event=>this.setState({password:event.target.value}))}/></p><br></br>
          <p><button onClick={this.Register}>SUBMIT</button></p>
          </div>

      </div>
           
        )
    }
}

export default UserInsert