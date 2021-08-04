import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={

            employees: []

        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee =this.editEmployee.bind(this);
        this.deleteEmployee=this.deleteEmployee.bind(this);
        this.viewEmployee=this.viewEmployee.bind(this);
    }
    
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
         this.setState({employees: res.data});
        });
    }
     addEmployee(){
        this.props.history.push('/add-employee/_add');
 
     }
     editEmployee(id){
         this.props.history.push(`/add-employee/${id}`);
     }

     deleteEmployee(id){
         //delete rest api call
         EmployeeService.deleteEmployee(id).then((res)=>{
         this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
         });
     }
     viewEmployee(id){
         this.props.history.push(`/view-employee/${id}`);

     }

    render() {
        return (
            <div>
                 <div>
                 <h2 className="text-center"> Employee List</h2>
                    <button className="btn btn-primary" onClick={this.addEmployee}>Add Employee</button>
                    
               </div>
               <div className='row'>
                   <table className="table table-striped table-borde red">
                     <thead>
                         <tr>
                         <th> Employee First Name</th>
                         <th> Employee Last Name</th>
                         <th> Employee EmailId </th>
                         <th> Actions</th>
                         </tr>


                     </thead>

                     <tbody>
                         {
                             this.state.employees.map(
                                 employee =>
                                 <tr key={employee.id}>
                                     <td>{employee.firstName}</td>
                                     <td>{employee.lastName}</td>
                                     <td>{employee.emailId}</td>
                                     <td> 
                                         <button onClick={()=>this.editEmployee(employee.id)} className='btn btn-info' >update</button>
                                         <button onClick={()=>this.deleteEmployee(employee.id)} style={{marginLeft:'10%'}} className='btn btn-danger'>Delete</button> 
                                         <button onClick={()=>this.viewEmployee(employee.id)} style={{marginLeft:'10%'}} className='btn btn-info'>View</button> 
                                     </td>

                                 </tr>
                             )
                         }






                     </tbody>

                  </table>
                   
                   
                   </div> 
            </div>
        );
    }
}

export default ListEmployeeComponent;