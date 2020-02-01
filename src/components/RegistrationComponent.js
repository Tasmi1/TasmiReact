import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input, Container, FormText } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import HeaderComponent from './HeaderComponent'

class RegistrationComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
                    fname: '',
                    address: '',
                    age: '',
                    gender:'',
                    phonenumber:'',
                    username:'',
                    password: '',
        }
    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    register = (e) => {
        e.preventDefault();
        console.log(this.state);

        axios.post('http://localhost:3000/users/register', this.state)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem('token', response.data.token)
                this.setState({
                    fname: '',
                    address: '',
                    age: '',
                    gender:'',
                    phonenumber:'',
                    username:'',
                    password: '',
                    isRegistered: true
                });

            }).catch((err) => console.log(err))
    }


    render() {
        if (this.state.isRegistered === true) {
            return <Redirect to='/dashboard' />
        }
        return (
            <Container style={{marginTop:'100px'}}>
            <HeaderComponent />
                <h2>Sign Up</h2>
                <Form>
                    <FormGroup>
                        <Label for='fname'>Full Name</Label>
                        <Input type='text' name='fname' id='fname'
                            value={this.state.fname} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='address'>Address</Label>
                        <Input type='text' name='address' id='address'
                            value={this.state.address} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='age'>Age</Label>
                        <Input type='text' name='age' id='age'
                            value={this.state.age} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='gender'>Gender</Label>
                        <Input type='text' name='gender' id='gender'
                            value={this.state.gender} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='phonenumber'>Phonenumber</Label>
                        <Input type='text' name='phonenumber' id='phonenumber'
                            value={this.state.phonenumber} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='username'>UserName</Label>
                        <Input type='text' name='username' id='username'
                            value={this.state.username} onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.handleChange} />
                    </FormGroup>
                    <Button color='primary' onClick={this.register}>Sign Up</Button>
                    <FormText>Already a user? <Link to='./Login'> Login here!</Link></FormText>
                </Form>
            </Container>
            
        )
    }
}
export default RegistrationComponent