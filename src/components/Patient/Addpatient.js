import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'
import Navigation from '../Navigation';


class Addpatient extends React.Component{

      constructor(props) {
          super(props)
          this.state = {
              fname: '', 
              address: '',
              age:'',
              phonenumber:'',
              disease:'',
              prescription:''
              
          }
      }
      handleChange = (e) => {
          this.setState(
              { [e.target.name]: e.target.value }
          )
      }
      submitForm = (e) => {
          e.preventDefault();
          axios.post('http://localhost:3000/patient', this.state)
              .then((response) => {
                  console.log(response.data)
                  localStorage.setItem('token', response.data.token)
                  this.setState({ isLoggedIn: true })
              }).catch((err) => console.log(err.response))
          this.setState({ username: '', password: '' })
      }
      render() {
  
          if (this.state.isLoggedIn === true) {
              return <Redirect to='/dashboard' />
          }
          return (
  
              <Container style={{ marginBottom:'50px'}} >
                  <Navigation />
                  <h2>Add Patient</h2>
                  <Form>
                      <Col>
                      <FormGroup>
                        <Label for='fname'>Full Name</Label>
                        <Input type='text' name='fname' id='fname'
                            value={this.state.fname} onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label for='address'>Address</Label>
                        <Input type='text' name='address' id='address'
                            value={this.state.address} onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label for='age'>Age</Label>
                        <Input type='text' name='age' id='age'
                            value={this.state.age} onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                   <Col>
                    <FormGroup>
                        <Label for='phonenumber'>Phonenumber</Label>
                        <Input type='text' name='phonenumber' id='phonenumber'
                            value={this.state.phonenumber} onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                    <Col>
                    <FormGroup>
                        <Label for='disease'>Disease</Label>
                        <Input type='text' name='disease' id='disease'
                            value={this.state.disease} onChange={this.handleChange} />
                    </FormGroup>
                    </Col>
                      <Col>
                          <FormGroup >
                              <Label for='prescription'>Prescription</Label>
                              <Input type='text' name='prescription' id='prescription' value={this.state.prescription} onChange={this.handleChange} />
                          </FormGroup>
                      </Col>


                      <Button color="primary" onClick={this.submitForm} type="submit" href="/dashboard">ADD PATIENT</Button>
                      
                  </Form>
              </Container>
          )
      }
  }
export default Addpatient