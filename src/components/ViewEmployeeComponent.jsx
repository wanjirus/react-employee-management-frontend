import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
      super(props)
      this.state={
          id: this.props.match.params.id,
          employee: [] 

      }

    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then(res=>{
            this.setState({employee:res.data});

        });
    }
    
    render() {
        return (
            <div>
                <br></br>
               <div className="card col-md-6 offset-md-3">
                   <h3 className="text-center">view employee details</h3>
                   <div className="card-body">
                       <div className="row"></div>
                       <label>Employee First Name</label>
                       <div>{this.state.employee.firstName}</div>
                

                   <div className="row"></div>
                       <label>Employee Last Name</label>
                       <div>{this.state.employee.lastName}</div>
                   

                   <div className="row"></div>
                       <label>Employee Email Id</label>
                       <div>{this.state.employee.emailId}</div>
                   </div>
</div>

               
            </div>
        );
    }
}

export default ViewEmployeeComponent;