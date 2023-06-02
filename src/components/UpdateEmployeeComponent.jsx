import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            Name: '',
            Gender: '',
            Dob: '',
            Salary:'',
            Department:''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({Name: employee.Name,
                Gender: employee.Gender,
                Dob : employee.Dob,
                Salary: employee.Salary,
                Department: employee.Department
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {Name: this.state.Name, Gender: this.state.Gender, Dob: this.state.Dob, Salary:this.Salary, Department:this.Department};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    
    changeNameHandler= (event) => {
        this.setState({Name: event.target.value});
    }

    changeGenderHandler= (event) => {
        this.setState({Gender: event.target.value});
    }

    changeDobHandler= (event) => {
        this.setState({Dob: event.target.value});
    }
    changeSalaryHandler= (event) => {
        this.setState({Salary: event.target.value});
    }
    changeDepartmentHandler= (event) => {
        this.setState({Department: event.target.value});
    }
    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Employee</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.Name} onChange={this.changeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Gender: </label>
                                            <input placeholder="Gender" name="Gender" className="form-control" 
                                                value={this.state.Gender} onChange={this.changeGenderHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Dob: </label>
                                            <input placeholder="Dob" name="Dob" className="form-control" 
                                                value={this.state.Dob} onChange={this.changeDobHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Dob: </label>
                                            <input placeholder="Salary" name="Salary" className="form-control" 
                                                value={this.state.Salary} onChange={this.changeSalaryHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Dob: </label>
                                            <input placeholder="Department" name="Department" className="form-control" 
                                                value={this.state.Department} onChange={this.changeDepartmentHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent;
