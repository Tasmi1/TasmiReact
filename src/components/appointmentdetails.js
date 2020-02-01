import React, { Component } from 'react'
import { Container, Table, Row,Col } from 'reactstrap'
import Axios from 'axios';
import Navigation from './Navigation';


export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
           
            appointmentdetails:[],

            fname: '',
            address: '',
            age:'',
            date:'',
            phonenumber:'',
            taskDone: false,
            isEdit: false,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/appointment', this.state.config)
            .then((response) => {
                this.setState({
                    appointmentdetails: response.data
                })
            }).catch((err) => console.log(err.response))


        Axios.get('http://localhost:3000/Doctor', this.state.config)
            .then((response) => {
                this.setState({
                    Doctors: response.data,
                   
                })
            }).catch((err) => console.log(err.response))
    }

    handleTaskNameChange = (taskName) => {
        this.setState({
            taskName: taskName
        })
    }

    handleTaskDoneChange = (isDone) => {
        this.setState({
            taskDone: isDone
        })
    }

    handleTaskSubmit = (e) => {
        e.preventDefault();
        if (!this.state.taskName) return;

        Axios.post('http://localhost:3000/tasks',
            {
                name: this.state.taskName,
                done: this.state.taskDone,
                category: this.state.categoryId
            },
            this.state.config).then((response) => {
                this.setState({
                    tasks: [...this.state.tasks, response.data],
                    taskName: ''
                })
            })
    }

    handleTaskDelete = (taskId) => {
        Axios.delete(`http://localhost:3000/tasks/${taskId}`, this.state.config)
            .then((response) => {
                const filteredTask = this.state.tasks.filter((task) => {
                    return task._id !== taskId
                })
                this.setState({
                    tasks: filteredTask
                })
            })
    }

    handleTaskUpdate = (e) => {
        e.preventDefault();
        Axios.put(`http://localhost:3000/tasks/${this.state.taskId}`,
            {
                name: this.state.taskName,
                done: this.state.taskDone,
                category: this.state.categoryId
            },
            this.state.config)
            .then((response) => {
                const updatedTasks = this.state.tasks.map((task) => {
                    if (task._id === response.data._id) {
                        task = response.data
                    }
                    return task;
                })
                this.setState({
                    tasks: updatedTasks,
                    taskName: '',
                    taskDone: false,
                    taskId: '',
                    isEdit: false
                })
            }).catch((err) => console.log(err.response));
    }


    itemClick = (task) => {
        this.setState({
            isEdit: !this.state.isEdit,
            taskId: task._id,
            taskName: task.name,
            taskDone: task.done
        })
        if (task.category) {
            this.setState({
                categoryId: task.category._id
            })
        } else this.setState({
            categoryId: this.state.categories[0]._id
        })

        if (this.state.isEdit) {
            this.setState({
                taskId: '',
                taskName: '',
                taskDone: false,

            })
        }
    }

    handleCategoryChange = (e) => {
        this.setState({
            categoryId: e.target.value
        })
    }

    render() {
        return (
            <React.Fragment>
                <Navigation />
                <Container className='mt-4'>
                    <Row>
<Col xs="6">
<Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Date</th>
          <th>Phone Number</th>
          <th>Action </th>
        
        </tr>
      </thead>

      <tbody>
          {
        this.state.appointmentdetails.map((appointment)=>{
           return <tr>
          <th scope="row">1</th>
          <td>{appointment.fname}</td>
                        <td>{appointment.address}</td>
                        <td>{appointment.age}</td>
                        <td>{appointment.setdate}</td>
                        <td>{appointment.phonenumber}</td> 
                       
                      
        </tr>
        })
    }
      </tbody>

    </Table>

</Col>




                    </Row>
                
                </Container>
            </React.Fragment>
        )
    }
    
}
