import React, { Component } from 'react'
import { Button } from 'reactstrap'

export default class Patientitem extends Component {

    render() {

        const { patient } = this.props
        
        return (
            <div></div>
            <tr>
                <td>
                    {
                        (patient.done) ? <del>{patient.fname}</del> : <span>{patient.name}</span>
                    }
                </td>
                <td>
                    <Button size='sm' color='warning' onClick={() => this.props.handleEdit(patient._id)}>Edit</Button>
                </td>
                <td>
                    <Button size='sm' color='danger'
                        onClick={() => this.props.handleDelete(patient._id)}>Delete</Button>
                </td>
            </tr>
        )
    }
}
