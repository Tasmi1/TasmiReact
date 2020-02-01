import React, { Component } from 'react'
import { Container, Table,Row, Button, Col,Modal,
    ModalHeader, 
    ModalBody, 
    ModalFooter, 
    Input, 
    FormGroup } from 'reactstrap'
import Axios from 'axios';
import Navigation from './Navigation';
import { Content } from 'react-mdl';

export default class Dashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            patients:[],
            Doctors:[],
            currentPatient:{},
            currentDoctor:{},
            fname: '',
            address: '',
            age:'',
            gender:'',
            phonenumber:'',
            taskDone: false,
            isEdit: false,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            }
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/patient', this.state.config)
            .then((response) => {
                this.setState({
                    patients: response.data
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

    delete = (patientid) => {
        Axios.delete(`http://localhost:3000/patient/${patientid}`)
            .then((response) => {
                const filteredpatient = this.state.patients.filter((patients) => {
                    return patients._id == patientid
                })
                this.setState({
                    patients: filteredpatient
                })
                alert('Delete Suucessfully')
                window.location.reload(false);
            })
    }
    toggle = (e) => {
        this.setState({
            isEdit: !this.state.isEdit
        })
    }


    // delete = (doctorid) => {
    //     Axios.delete(`http://localhost:3000/doctors/${doctorid}`)
    //         .then((response) => {
    //             const filtereddoctor = this.state.Doctors.filter((Doctors) => {
    //                 return Doctors._id == doctorid
    //             })
    //             this.setState({
    //                 Doctors: filtereddoctor
    //             })
    //             alert('Delete Suucessfully')
    //             window.location.reload(false);
    //         })
    // }
    // toggle = (e) => {
    //     this.setState({
    //         isEdit: !this.state.isEdit
    //     })
    // }


    // handleTaskDelete = (Doctor) => {
    //     Axios.delete(`http://localhost:3000/Doctor/${patient}`, this.state.config)
    //         .then((response) => {
    //             const filteredpatient = this.state.patients.filter((patient) => {
    //                 return patient._id !== patient
    //             })
    //             this.setState({
    //                 patient: filteredpatient
    //             })
    //             alert('Delete Suucessfully')
    //             window.location.reload(false);
    //         })
    // }

    //events edit by their unique id
    patientEdit = (patientid) => {
        console.log(patientid)

        this.setState({
            currentPatient: this.state.patients.find((patient) => {
                return patient._id === patientid
            })
        }, console.log(this.state.currentPatient.name));
         this.toggle();
    }

    handlePatientChange = (e) => {
        this.setState({
            currentPatient: { ...this.state.currentPatient, [e.target.name]: e.target.value }
        });
    };


//doctor edit by their unique id
    //  doctorEdit = (doctorid) => {
    //     console.log(doctorid)





     //doctor edit by their unique id
    //  doctorEdit = (doctorid) => {
    //     console.log(doctorid)

    //     this.setState({
    //         currentDoctor: this.state.Doctors.find((doctor) => {
    //             return doctor._id === doctorid
    //         })
    //     }, console.log(this.state.currentDoctor.name));
    //      this.toggle();
    // }

    // handlePatientChange = (e) => {
    //     this.setState({
    //         currentDoctor: { ...this.state.currentDoctor, [e.target.name]: e.target.value }
    //     });
    // };


    
///update events data by admin
handleUpdate=(patientid)=>{
    console.log(patientid);
    // event.preventDefault();
    Axios.put(`http://localhost:3000/patient/${patientid}`,this.state.currentPatient,this.state.config)
    .then((response)=>{
        console.log(response.data)
        let updatedPatient = this.state.patients.map((patient)=> {
            if(patient._id === patientid) {
                patient = this.state.currentPatient
            }
            return patient
        })
        
        this.setState({
            patients: updatedPatient
        })
        this.toggle();

        // alert('user updated');
    })
}

// ///update doctor data by admin
// handleUpdate=(doctorid)=>{
//     console.log(doctorid);
//     // event.preventDefault();
//     Axios.put(`http://localhost:3000/doctors/${doctorid}`,this.state.currentDoctor,this.state.config)
//     .then((response)=>{
//         console.log(response.data)
//         let updatedDoctor = this.state.Doctors.map((doctor)=> {
//             if(doctor._id === doctorid) {
//                 doctor = this.state.currentDoctor
//             }
//             return doctor
//         })
        
//         this.setState({
//             Doctors: updatedDoctor
//         })
//         this.toggle();

//         // alert('user updated');
//     })
// }


  


  

    render() {
        
        return (
            <React.Fragment>
                <Navigation />
                <Content>
                    <Row>
                        <Col md="6">

                        <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
          <th>Phone Number</th>
          <th>Disease</th> 
          <th>Prescription</th>
          <th>Action </th>
        </tr>
      </thead>

      <tbody>
          {
        this.state.patients.map((patient)=>{
           return <tr>
          <td>{patient.fname}</td>
                        <td>{patient.address}</td>
                        <td>{patient.age}</td>
                        <td>{patient.phonenumber}</td> 
                        <td>{patient.disease}</td>
                        <td>{patient.prescription}</td>
                        <td> <Button onClick={()=>this.patientEdit(patient._id)}>Edit</Button>  &nbsp;
                        <Button class="btn btn-primary" onClick={()=> this.delete(patient._id)}>Delete</Button></td>
        </tr>
        
        })
    }
      </tbody>

    </Table>
&nbsp;

                        </Col>


                        <Col md="6" >

<Table>
<thead >
<tr> 
<th>Name</th>
<th>Address</th>
<th>Age</th>
<th> Number</th>
<th>Specialist</th> 
<th>Action </th>
</tr>
</thead>

<tbody>
{
this.state.Doctors.map((doctor)=>{
return <tr>
<td>{doctor.fname}</td>
<td>{doctor.address}</td>
<td>{doctor.age}</td>
<td>{doctor.phonenumber}</td> 
<td>{doctor.specialist}</td>

<td> <Button >Edit</Button>  &nbsp;
<Button class="btn btn-primary" onClick={()=> this.delete(doctor._id)}>Delete</Button></td>
</tr>

})
}
</tbody>

</Table>


</Col>

                    </Row>
                
                </Content>
                <Modal isOpen={this.state.isEdit} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Edit Patient Data
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <Input name='fname' type='text'
                                value={this.state.currentPatient.fname} 
                                onChange={this.handlePatientChange} />
                        </FormGroup>
                        <FormGroup>
                            <Input name='address' type='text'
                                value={this.state.currentPatient.address} 
                                onChange={this.handlePatientChange}/>
                        </FormGroup>
                        <FormGroup>
                            <Input name='age' type='text'
                                value={this.state.currentPatient.age} 
                                onChange={this.handlePatientChange}/>
                        </FormGroup>   
                        <FormGroup>
                            <Input name='phonenumber' type='text'
                                value={this.state.currentPatient.phonenumber} 
                                onChange={this.handlePatientChange}/>
                        </FormGroup>        
                        <FormGroup>
                            <Input name='disease' type='text'
                                value={this.state.currentPatient.disease} 
                                onChange={this.handlePatientChange}/>
                        </FormGroup>   
                        <FormGroup>
                            <Input name='prescription' type='text'
                                value={this.state.currentPatient.prescription} 
                                onChange={this.handlePatientChange}/>
                        </FormGroup>                                 
                    </ModalBody>  
                    <ModalFooter>
                        <Button color='primary' onClick={()=>this.handleUpdate(this.state.currentPatient._id)}>
                            Save Changes</Button>
                    </ModalFooter>
                </Modal>

            </React.Fragment>




        )
    }
}
