import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';
import {
  Container, Col, Form, FormGroup, Label, Input, Button, FormText
} from 'reactstrap'
import {Route,NavLink, Switch } from 'react-router-dom'
import Navigation from './Navigation';
import HomeComponent from './HomeComponent'



class Appointment extends React.Component{

      constructor(props) {
          super(props)
          this.state = {
              username: '',
              password: '',
              isLoggedIn: false
          }
      }
      handleChange = (e) => {
          this.setState(
              { [e.target.name]: e.target.value }
          )
      }
      submitForm = (e) => {
          e.preventDefault();
          axios.post('http://localhost:3000/appointment', this.state)
              .then((response) => {
                  console.log(response.data)
                  localStorage.setItem('token', response.data.token)
                  this.setState({ isLoggedIn: true })
              }).catch((err) => console.log(err.response))
          this.setState({ username: '', password: '' })
      }
      render() {
  
          if (this.state.isLoggedIn === true) {
              return <Redirect to='/HomeComponent' />
          }
          return (
  
              <Container style={{marginTop:'100px', marginBottom:'50px'}}>
                  <h2>Appointment</h2>
                  <Form>
                      <Col>
                          <FormGroup >
                              <Label for='fname'>FullName</Label>
                              <Input type='text' name='fname' id='fname' value={this.state.fname} onChange={this.handleChange} />
                          </FormGroup>
                      </Col>
                      <Col>
                          <FormGroup >
                              <Label for='address'>Address</Label>
                              <Input type='text' name='address' id='address' value={this.state.address} onChange={this.handleChange} />
                          </FormGroup>
                      </Col>
                      <Col>
                          <FormGroup >
                              <Label for='age'>Age</Label>
                              <Input type='text' name='age' id='age' value={this.state.age} onChange={this.handleChange} />
                          </FormGroup>
                      </Col>
                      <Col>
                          <FormGroup >
                              <Label for='setdate'>Date</Label>
                              <Input type='text' name='setdate' id='setdate' value={this.state.setdate} onChange={this.handleChange} />
                          </FormGroup>
                      </Col>
                      <Col>
                          <FormGroup >
                              <Label for='phonenumber'>Phonenumber</Label>
                              <Input type='text' name='phonenumber' id='phonenumber' value={this.state.phonenumber} onChange={this.handleChange} />
                          </FormGroup>
                      </Col>
                      
                      
                      <Button color="primary" onClick={this.submitForm} type="submit">ADD</Button>
                     
                  </Form>
              </Container>
          )
      }
  }
export default Appointment