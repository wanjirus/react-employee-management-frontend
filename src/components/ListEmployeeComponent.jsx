import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmployeeService from '../services/EmployeeService';
import axios from 'axios';

class ListEmployeeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            employees: [],
            // firstName :"",
            emailId :""
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


        EmployeeService.getEmployeeById(this.state.id).then((res)=>{
            let employee=res.data;
            this.setState({firstName: employee.firstName,
                           lastName: employee.lastName,
                           emailId:employee.emailId
   
            });
        });


    }



     addEmployee(){
    this.props.history.push('/add-employee/_add');
 
     }
     editEmployee(id){
         this.props.history.push(`/add-employee/${id}`);
     }

    
          chatWithEmployee = async (id) =>{
           
     
            this.props.history.push(`/chat/${id}`);
            const password = this.state.employees.firstName;
            const username=this.state.employees.emailId; 
            const authObject = {'Project-ID':"bbd992b7-69f7-4d34-b328-1c4906aa63f1", 'User-Name': username, 'User-Secret': password };

           
        //     const password = this.state.employee.lastName;
        //    const username=this.state.employee.emailId;
            console.log(username, password);
               await axios.get('https://api.chatengine.io/chats', { headers: authObject });
            
                localStorage.setItem('username', username);
                localStorage.setItem('password', password);
                console.log(username, password);
                window.location.reload();
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
                                         <button onClick={()=>this.deleteEmployee(employee.id)} style={{marginLeft:'2%'}} className='btn btn-danger'>Delete</button> 
                                         <button onClick={()=>this.viewEmployee(employee.id)} style={{marginLeft:'5%'}} className='btn btn-info'>View</button> 
                                         <button onClick={()=>this.chatWithEmployee(employee.id)} style={{marginLeft:'5%'}} className='btn btn-info'>chat</button> 
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