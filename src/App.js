import React, { Component } from 'react';
import capture from './Capture.JPG';
import './App.css';
import swal from 'sweetalert';
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import Navigation from './Navigation'
import {Card, CardDeck, Jumbotron} from "react-bootstrap";

class App extends Component {

  constructor(){

    super();
    this.state={
      employeeList : [
        {
          firstName : "Muhammad",
          lastName :  "Hoti",
          email : "muhammad.hoti@gmail.com",
          salary : "50,000",
          joinDate : "30/8/2018"

        },
        {
          firstName : "Zaeem",
          lastName :  "Chohan",
          email : "zeece96@gmail.com",
          salary : "70,000",
          joinDate : "30/8/2017"

        },
        {
          firstName : "Hameez",
          lastName :  "Chohan",
          email : "hrc10@gmail.com",
          salary : "90,000",
          joinDate : '30/8/2015'

        }
      ],
              addLeave : false,
      editIndex : null,

    }
    this.updateFirstName = this.updateFirstName.bind(this)
    this.updateLastName = this.updateLastName.bind(this)
    this.updateEmail = this.updateEmail.bind(this)
    this.updateSalary = this.updateSalary.bind(this)


    }
    deleteLeave(index){
   const leaveList = this.state.leaveList;
    leaveList.splice(index, 1)
   this.setState({
     leaveList
   })
  }

  editLeave(index){

    this.setState(
      {
        editIndex : index
      }
    )
  }

  canceleditLeave(){
    this.setState({
      editIndex : null
    })
  }

  updateLeave(){
    const edI = this.state.editIndex
    this.state.editedLeaves && (this.state.leaveList[edI].Leaves = this.state.editedLeaves)
    this.state.editedfromDate && (this.state.leaveList[edI].fromDate = this.state.editedfromDate)
    this.state.editedtoDate && (this.state.leaveList[edI].toDate = this.state.editedtoDate)
    this.setState({
      // employeeList[edI].firstName : this.state.editedFirstName,
      //I Tried This But It Throws An Error
      editIndex : null
    })
  }

  updateLeaves(e){
  this.setState({
    editedLeaves : e.target.value
  }
  )
  }

  updatefromDate(e){
    this.setState({
      editedfromDate : e.target.value
    })
  }

  updatetoDate(e){
    this.setState({
      editedtoDate : e.target.value
    })
    }

    ////Attendance
        deleteAttendance(index){
   const attendanceList = this.state.attendanceList;
    attendanceList.splice(index, 1)
   this.setState({
     attendanceList
   })
  }

  editAttendance(index){

    this.setState(
      {
        editIndex : index
      }
    )
  }

  canceleditAttendance(){
    this.setState({
      editIndex : null
    })
  }

  updateAttendance(){
    const edI = this.state.editIndex
    this.state.editedemailId && (this.state.attendanceList[edI].empId = this.state.editedemailId)
    this.state.editeddate && (this.state.attendanceList[edI].date = this.state.editeddate)
    this.state.editedstartTime && (this.state.attendanceList[edI].startTime = this.state.editedstartTime)
    this.state.editedendTime && (this.state.attendanceList[edI].endTime = this.state.editedendTime)
    this.setState({
      // employeeList[edI].firstName : this.state.editedFirstName,
      //I Tried This But It Throws An Error
      editIndex : null
    })
  }

  updateemailId(e){
  this.setState({
    editedemailId : e.target.value
  }
  )
  }

  updatedate(e){
    this.setState({
      editeddate : e.target.value
    })
  }

  updatestartTime(e){
    this.setState({
      editedstartTime : e.target.value
    })
    }
updateendTime(e){
    this.setState({
      editedendTime : e.target.value
    })
    }
  //Event Functions

  login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    email === "admin@domain.com" && password === "admin" ? this.setState({
      user:{
        email : email,
        password : password
      }
        }) : swal("Access Deneid", "Please Enter Correct Email And Password");
  }

  addEmployee() {
      this.setState({

          addEmployee : true,

        })
  }

  back(){
   this.setState({
    Leave : false,
   })
  }
  attendanceback(){
  this.setState({
  Attendance:false,
  })

  }

  cancelAddEmployee(){
    this.setState({
      addEmployee : false,
    })
  }

  addLeave() {
      this.setState({

          addLeave : true,
        })
  }

  cancelAddLeave(){
    this.setState({
      addLeave : false,
    })
  }

  Leave(){
this.setState({
         leaveList : [
        {
          empId : "105105642",
          fromDate :  "31/8/2018",
          toDate : "30/9/2018",
          Leaves:"1",
          Paidleaves:"10"

        },
        {
           empId : "105105646",
          fromDate :  "31/8/2018",
          toDate : "30/9/2018",
          Leaves:"1",
          Paidleaves:"10"

        },
        { empId : "105105642",
          fromDate :  "31/8/2018",
          toDate : "30/9/2018",
          Leaves:"1",
          Paidleaves:"10"

        }
      ],
      Leave : true,
      editIndex : null,
    })
    }

  addLeaveData(){
this.state={
      leaveList : [
        {
          empId : "105105642",
          fromDate :  "31/8/2018",
          toDate : "30/9/2018",
          Leaves:"1",
          Paidleaves:"10"

        },
        {
           empId : "105105646",
          fromDate :  "31/8/2018",
          toDate : "30/9/2018",
          Leaves:"1",
          Paidleaves:"10"

        },
        { empId : "105105642",
          fromDate :  "31/8/2018",
          toDate : "30/9/2018",
          Leaves:"1",
          Paidleaves:"10"

        }
      ],
      addLeave : false,
      editIndex : null,
    }
    this.updatefromDate = this.updatefromDate.bind(this)
    this.updatetoDate = this.updatetoDate.bind(this)
    this.updateLeaves = this.updateLeave.bind(this)

    const date = new Date();
    const empId = document.getElementById('empId').value;
    const fromDate = document.getElementById('fromDate').value;
    const toDate = document.getElementById('toDate').value;
    const Leaves = document.getElementById('Leaves').value;
    this.state.leaveList.push(
      {
        empId : "105105642",
          fromDate :  "31/8/2018",
          toDate : "30/9/2018",
          Leaves:"1",
          Paidleaves:"10"

      },
    )
      this.setState({
        addLeave : false,
      })
  }

  //Attendance

    addAttendance() {
      this.setState({

          addAttendance : true,
        })
  }

  cancelAddAttendance(){
    this.setState({
      addAttendance : false,
    })
  }
Attendance(){
this.setState({
         attendanceList : [
        {
           emailId :"est@gmail.com",
          date :  "31/8/2018",
          startTime : "11:00",
          endTime:"12:00"

        },
        {
            emailId :"est1@gmail.com",
          date :  "31/8/2018",
          startTime : "11:00",
          endTime:"12:00"

        },
        {  emailId :"est2@gmail.com",
          date :  "31/8/2018",
          startTime : "11:00",
          endTime:"12:00"

        }
      ],
      Attendance : true,
      editIndex : null,
    })
    }

  addAttendanceData(){
this.state={
      attendanceList : [
        {
           emailId :"est@gmail.com",
          date :  "31/8/2018",
          startTime : "11:00",
          endTime:"12:00"

        },
        {
            emailId :"est1@gmail.com",
          date :  "31/8/2018",
          startTime : "11:00",
          endTime:"12:00"

        },
        {  emailId :"est2@gmail.com",
          date :  "31/8/2018",
          startTime : "11:00",
          endTime:"12:00"

        }
      ],
      addAttendance : false,
      editIndex : null,
    }
    this.updateemailId = this.updateemailId.bind(this)
    this.updatedate = this.updatedate.bind(this)
    this.updatestartTime = this.updatestartTime.bind(this)
    this.updateendTime = this.updateendTime.bind(this)
    const date = new Date();
    const emailId = document.getElementById('emailId').value;
    const date1 = document.getElementById('date').value;
    const startTime = document.getElementById('startTime').value;
    const endTime = document.getElementById('endTime').value;
    this.state.attendanceList.push(
      {
        emailId :emailId,
          date :  date,
          startTime : startTime,
          endTime:endTime

      },
    )
      this.setState({
        addAttendance : false,
      })
  }
  ////

  logOut(){
    this.setState({
      user : false
    })

  }

////Employee
  deleteEmployee(index){
   const empList = this.state.employeeList;
    empList.splice(index, 1)
   this.setState({
     empList
   })
  }

  editEmployee(index){

    this.setState(
      {
        editIndex : index
      }
    )
  }

  canceleditEmployee(){
    this.setState({
      editIndex : null
    })
  }

  updateEmployee(){
    const edI = this.state.editIndex
    this.state.editedFirstName && (this.state.employeeList[edI].firstName = this.state.editedFirstName)
    this.state.editedLastName && (this.state.employeeList[edI].lastName = this.state.editedLastName)
    this.state.editedEmail && (this.state.employeeList[edI].email = this.state.editedEmail)
    this.state.editedSalary && (this.state.employeeList[edI].salary = this.state.editedSalary)
    this.setState({
      // employeeList[edI].firstName : this.state.editedFirstName,
      //I Tried This But It Throws An Error
      editIndex : null
    })
  }

  updateFirstName(e){
  this.setState({
    editedFirstName : e.target.value
  }
  )
  }

  updateLastName(e){
    this.setState({
      editedLastName : e.target.value
    })
  }

  updateEmail(e){
    this.setState({
      editedEmail : e.target.value
    })
    }

  updateSalary(e){
    this.setState({
      editedSalary : e.target.value
    })
      }

  //JSX Rendering Functions

  renderHeader(){
    return(<Header/>
    )
  }

  renderNavigation(){
    return( <Navigation/>

    )
  }

  renderFooter(){
    return( <div><div className="logOut">
    <div className="difference"/>
        <button className="btn btn-warning" onClick={()=>{
          this.logOut();
        }}>Log Out</button>
      </div>

           <Jumbotron className="bg-dark" >
               <div bg="primary" className="row ">
                   <CardDeck bg="primary">
                       <Card style={{ width: '90rem' }}>
                           <Card.Body>
                               <Card.Title>Operational hours</Card.Title>
                               <Card.Text>

                                   <div className="small text-black-50">Mon - Fri 9 am to 5 pm
                                        Sat - Sun 10 am to 3 pm
                                    </div>
                               </Card.Text>

                           </Card.Body>
                       </Card>

                       <Card style={{ width: '90rem' }}>
                       <Card.Body>
                           <Card.Title> Contact</Card.Title>
                           <Card.Text>

                               <div className="small text-black-50">
                                        <a href="#">customer@dhkr.com</a>
                                        <div className="text-black-50">+1 (519) 987-4253</div>
                                    </div>
                           </Card.Text>

                       </Card.Body>
                       </Card>




                   </CardDeck>
               </div>
           </Jumbotron>
</div>
    )
  }

  renderLogin(){
    return(
    <div className="loginForm">
      <h1 className="loginFormHeader"><b>Login</b></h1>
      <form>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control " id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label >Password</label>
          <input type="password" className="form-control" id="password" placeholder="Password"/>
        </div>
        <button type="button" className="btn btn-success btn-lg" onClick={()=>{this.login()}}>Login</button>
      </form>
    </div>
    )
  }

  rendertoDoList(){
    return(

        <div className="renderTodoList ">
            <div className="difference"></div>

            <a className="btn btn-secondary btn-lg float-lg-left" onClick={()=>{
            this.addLeave()
          }}><i className="material-icons ">Add Leave</i></a>
            <a className="Btn-Width"/>
            <a className="btn  btn-secondary btn-info float-lg-left" onClick={()=>{
            this.Leave()
          }}><i className="material-icons ">Leave List</i></a>
            <a className="Btn-Width"/>
             <a className="btn btn-secondary btn-primary float-lg-left" onClick={()=>{
            this.addAttendance()
          }}><i className="material-icons">Add Attendance</i></a>
            <a className="Btn-Width"/>
           <a className="btn btn-secondary btn-info float-lg-left" onClick={()=>{
            this.Attendance()
          }}><i className="material-icons">List Attendance</i></a>

            <div className="difference"></div>


          <h1 className="todoHeader " >Employee List</h1>
            <div className="difference"></div>

          <div className="employeeList">
            <table className="table table-striped table-light">
              <thead>
                <tr>
                  <th scope="col" className="centerAll ">#</th>
                  <th scope="col" className="centerAll ">First Name</th>
                  <th scope="col" className="centerAll">Last Name</th>
                  <th scope="col" className="centerAll">Email</th>
                  <th scope="col" className="centerAll">Salary</th>
                  <th scope="col" className="centerAll">Join Date</th>
                  <th scope="col" className="centerAll">Edit</th>
                  <th scope="col" className="centerAll">Delete</th>
                </tr>
              </thead>
              <tbody>
              {this.state.employeeList.map((value, index)=>{
                    return(
                      this.state.editIndex !== index ? <tr>
                            <th scope="row" id={index+1}>{index+1}</th>
                            <td className="centerAll" id={index+2}>{value.firstName}</td>
                            <td className="centerAll" id={index+3}>{value.lastName}</td>
                            <td className="centerAll" id={index+4}>{value.email}</td>
                            <td className="centerAll" id={index+5}>{value.salary}</td>
                            <td className="centerAll" id={index+6}>{value.joinDate}</td>
                            <td className="centerAll" id={index+7}><button onClick={()=>{
                              this.editEmployee(index)
                            }} className="btn btn-primary">Edit</button></td>
                            <td className="centerAll" id={index+8}><button onClick={()=>{
                              this.deleteEmployee(index)
                            }} className="btn btn-danger">Delete</button></td>
                          </tr>
                          : <tr>
                          <th scope="row" id={index+1}>{index+1}</th>
                          <td className="centerAll" id={index+2+'edit'}><input type="text" defaultValue={value.firstName} onChange={this.updateFirstName}/></td>
                          <td className="centerAll" id={index+3+'edit'}><input type="text" defaultValue={value.lastName} onChange={this.updateLastName}/></td>
                          <td className="centerAll" id={index+4+'edit'}><input type="text" defaultValue={value.email} onChange={this.updateEmail} /></td>
                          <td className="centerAll" id={index+5+'edit'}><input type="text" defaultValue={value.salary} onChange={this.updateSalary}/></td>
                          <td className="centerAll" id={index+6+'edit'}><input type="text" defaultValue={value.joinDate}/></td>
                          <td className="centerAll" id={index+7+'edit'}><button onClick={()=>{
                            this.canceleditEmployee()
                          }} className="btn btn-primary">Cancel</button></td>
                          <td className="centerAll" id={index+8}><button onClick={()=>{
                            this.updateEmployee(index)
                          }} className="btn btn-info">Update</button></td>
                        </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>
          <a className="btn-floating btn-large waves-effect waves-light green" onClick={()=>{
            this.addEmployee()
          }}><i className="material-icons">+</i></a>

             <div className="difference"></div>

        </div>
    )

  }


  addEmployeeData(){

    const date = new Date();
    const firstName = document.getElementById(`firstName`).value;
    const lastName = document.getElementById(`lastName`).value;
    const email2 = document.getElementById(`email2`).value;
    const salary = document.getElementById(`salary`).value;
    const joinDate = date.getDate()+"/"+(+date.getMonth()+1)+"/"+date.getFullYear()
    this.state.employeeList.push(
      {
        firstName : firstName,
        lastName :  lastName,
        email : email2,
        salary : salary,
        joinDate : joinDate

      },
    )
      this.setState({
        addEmployee : false,
      })
  }


  renderLeaveList(){
    return(

        <div className="renderLeaveList">
            <div className="difference"></div>

            

            <div className="difference"></div>

          <h1 className="todoHeader">Leave List</h1>
            <div className="difference"></div>
          <div className="LeaveList">
            <table className="table table-striped table-light">
              <thead>
                <tr>
                  <th scope="col" className="centerAll">#</th>
                  <th scope="col" className="centerAll">Emp Id</th>
                  <th scope="col" className="centerAll">From Date</th>
                  <th scope="col" className="centerAll">To Date</th>
                  <th scope="col" className="centerAll">Leaves</th>
                  <th scope="col" className="centerAll">Edit</th>
                  <th scope="col" className="centerAll">Delete</th>
                </tr>
              </thead>
              <tbody>
              {this.state.leaveList.map((value, index)=>{
                    return(
                      this.state.editIndex !== index ? <tr>
                            <th scope="row" id={index+1}>{index+1}</th>
                            <td className="centerAll" id={index+2}>{value.empId}</td>
                            <td className="centerAll" id={index+3}>{value.fromDate}</td>
                            <td className="centerAll" id={index+4}>{value.toDate}</td>
                            <td className="centerAll" id={index+5}>{value.Leaves}</td>
                            <td className="centerAll" id={index+6}><button onClick={()=>{
                              this.editLeave(index)
                            }} className="btn btn-primary">Edit</button></td>
                            <td className="centerAll" id={index+7}><button onClick={()=>{
                              this.deleteLeave(index)
                            }} className="btn btn-danger">Delete</button></td>
                          </tr>
                          : <tr>
                          <th scope="row" id={index+1}>{index+1}</th>
                          <td className="centerAll" id={index+2+'edit'}><input type="text" defaultValue={value.empId} onChange={this.updateempId}/></td>
                          <td className="centerAll" id={index+3+'edit'}><input type="text" defaultValue={value.fromDate} onChange={this.updatefromDate}/></td>
                          <td className="centerAll" id={index+4+'edit'}><input type="text" defaultValue={value.toDate} onChange={this.updatetoDate}/></td>
                          <td className="centerAll" id={index+5+'edit'}><input type="text" defaultValue={value.Leaves} onChange={this.updateLeaves} /></td>
                          <td className="centerAll" id={index+6+'edit'}><button onClick={()=>{
                            this.canceleditLeave()
                          }} className="btn btn-primary">Cancel</button></td>
                          <td className="centerAll" id={index+7}><button onClick={()=>{
                            this.updateLeave(index)
                          }} className="btn btn-info">Update</button></td>
                        </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>

       <a className="btn btn-danger addLeaveForm" onClick={()=>{
            this.back()
          }}><i className="material-icons">Back</i></a>
    <div className="difference"></div>
        </div>
    )

  }

  renderAttendanceList(){
    return(

        <div className="renderAttendanceList">

            <div className="difference"></div>
            <div className="difference"></div>
          <h1 className="todoHeader">Attendance List</h1>
            <div className="difference"></div>
          <div className="AttendanceList">
            <table className="table table-striped table-light">
              <thead>
                <tr>
                  <th scope="col" className="centerAll">#</th>
                  <th scope="col" className="centerAll">Email Id</th>
                  <th scope="col" className="centerAll">Start Time</th>
                  <th scope="col" className="centerAll">End Time</th>
                  <th scope="col" className="centerAll">Date</th>
                  <th scope="col" className="centerAll">Edit</th>
                  <th scope="col" className="centerAll">Delete</th>
                </tr>
              </thead>
              <tbody>
              {this.state.attendanceList.map((value, index)=>{
                    return(
                      this.state.editIndex !== index ? <tr>
                            <th scope="row" id={index+1}>{index+1}</th>
                            <td className="centerAll" id={index+2}>{value.emailId}</td>
                            <td className="centerAll" id={index+3}>{value.startTime}</td>
                            <td className="centerAll" id={index+4}>{value.endTime}</td>
                            <td className="centerAll" id={index+5}>{value.date}</td>
                            <td className="centerAll" id={index+6}><button onClick={()=>{
                              this.editAttendance(index)
                            }} className="btn btn-primary">Edit</button></td>
                            <td className="centerAll" id={index+7}><button onClick={()=>{
                              this.deleteAttendance(index)
                            }} className="btn btn-danger">Delete</button></td>
                          </tr>
                          : <tr>
                          <th scope="row" id={index+1}>{index+1}</th>
                          <td className="centerAll" id={index+2+'edit'}><input type="text" defaultValue={value.emailId} onChange={this.updateemailId}/></td>
                          <td className="centerAll" id={index+3+'edit'}><input type="text" defaultValue={value.startTime} onChange={this.updatestartTime}/></td>
                          <td className="centerAll" id={index+4+'edit'}><input type="text" defaultValue={value.endTime} onChange={this.updateendTime}/></td>
                          <td className="centerAll" id={index+5+'edit'}><input type="text" defaultValue={value.date} onChange={this.updatedate} /></td>
                          <td className="centerAll" id={index+6+'edit'}><button onClick={()=>{
                            this.canceleditAttendance()
                          }} className="btn btn-primary">Cancel</button></td>
                          <td className="centerAll" id={index+7}><button onClick={()=>{
                            this.updateAttendance(index)
                          }} className="btn btn-info">Update</button></td>
                        </tr>
                    )
                  })}
              </tbody>
            </table>
          </div>

       <a className="btn btn-danger addLeaveForm" onClick={()=>{
            this.attendanceback()
          }}><i className="material-icons">Back</i></a>
    <div className="difference"></div>
        </div>
    )

  }
 renderAddAttendance() {
    return(
      <div className="loginForm">
        <h1 className="todoHeader">Add Attendance</h1>
        <form className="addAttendanceForm">
        <div className="form-group">
          <label >Email</label>
          <input type="text" className="form-control" id="emailId" aria-describedby="emailHelp" placeholder="Enter Email"/>
        </div>

        <div className="form-group">
          <label >Date</label>
          <input type="date" className="form-control" id="date" aria-describedby="emailHelp" placeholder="Enter Date"/>
        </div>
        <div className="form-group">
          <label >Start Time</label>
          <input type="time" className="form-control" id="startTime" aria-describedby="emailHelp" placeholder="Enter Start Time"/>
        </div>
            <div className="form-group">
          <label >End Time</label>
          <input type="time" className="form-control" id="endTime" aria-describedby="emailHelp" placeholder="Enter End Time"/>
        </div>
        <a class="btn btn-success addLeaveForm  " onClick={()=>{
        this.addAttendanceData()
        }}><i class="material-icons">add</i></a>

        </form>
          <div className="difference"></div>
        <button className="btn btn-danger addAttendanceForm" onClick={()=>{
        this.cancelAddAttendance()
        }}>Cancel</button>
      </div>
    )
  }
  renderAddEmployee() {
    return(
      <div className="loginForm">
        <h1 className="todoHeader">Add Employee</h1>
        <form className="addEmployeeForm">
        <div className="form-group">
          <label >First Name</label>
          <input type="text" className="form-control" id="firstName" aria-describedby="emailHelp" placeholder="Enter First Name"/>
        </div>
        <div className="form-group">
          <label >Last Name</label>
          <input type="text" className="form-control" id="lastName" aria-describedby="emailHelp" placeholder="Enter Last Name"/>
        </div>
        <div className="form-group">
          <label >Email address</label>
          <input type="email" className="form-control" id="email2" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label >Salary</label>
          <input type="text" className="form-control" id="salary" aria-describedby="emailHelp" placeholder="Enter Salary"/>
        </div>
        <a class=" btn btn-success " onClick={()=>{
        this.addEmployeeData()
        }}><i class="material-icons">Add</i></a>
        </form>
        <button className="btn btn-danger addEmployeeForm" onClick={()=>{
        this.cancelAddEmployee()
        }}>Cancel</button>
      </div>
    )
  }

  renderAddLeave() {
    return(
      <div className="loginForm">
        <h1 className="todoHeader">Add Leave</h1>
        <form className="addLeaveForm">
            <div className="form-group">
          <label >Emp Id</label>
          <input type="text" className="form-control" id="empId" aria-describedby="emailHelp" placeholder="Enter Employee Id"/>
        </div>

            <div className="form-group">
          <label >From Date</label>
          <input type="date" className="form-control" id="fromDate" aria-describedby="emailHelp" placeholder="From"/>
        </div>

            <div className="form-group">
          <label >To Date</label>
          <input type="date" className="form-control" id="toDate" aria-describedby="emailHelp" placeholder="To"/>
        </div>

            <div className="form-group">
                <label >No.of Leaves</label>
          <input type="text" className="form-control" id="Leaves" aria-describedby="emailHelp" placeholder="Enter Number of Leaves"/>


        </div>


        <a class=" btn-small success " onClick={()=>{
        this.addLeaveData()
        }}><i class="material-icons">Add</i></a>
        </form>
          <div className="difference2"></div>
        <button className="btn btn-danger addLeaveForm" onClick={()=>{
        this.cancelAddLeave()
        }}>Cancel</button>
      </div>
    )
  }

  
  renderLogOut(){
    return(
      <div className="logOut">
        <button className="btn btn-warning" onClick={()=>{
          this.logOut();
        }}>Log Out</button>
      </div>
    )
  }

  render() {
    return (

      <div className="App">
      {this.renderHeader()}
      {!this.state.user && !this.state.addLeave && this.renderLogin() }

      {!this.state.user && !this.state.addEmployee && !this.state.addLeave && !this.state.addAttendance && !this.state.Attendance   && !this.Leave  && this.rendertoDoList()}
      {this.state.addEmployee && this.renderAddEmployee()}
      {!this.state.user && !this.state.addEmployee && !this.state.addLeave && !this.state.addAttendance && !this.state.Attendance  && !this.Leave && !this.state.Attendance  && this.renderLogOut()}



      {this.state.user && !this.state.addLeave && !this.state.addEmployee && !this.state.addAttendance && !this.state.Attendance && !this.Leave &&  this.rendertoDoList()}
      {this.state.addLeave && this.renderAddLeave()}
      {this.state.user && !this.state.addLeave && !this.state.addEmployee && !this.state.addAttendance && !this.state.Attendance && !this.Leave && this.renderLogOut()}




       {this.state.user && !this.state.addLeave && !this.state.addEmployee && !this.state.addAttendance && !this.state.Attendance && !this.state.Leave  &&  this.rendertoDoList() }
      {this.state.Leave && this.renderLeaveList()}
      {this.state.user && !this.state.addLeave && !this.state.addEmployee && !this.state.addAttendance && !this.state.Attendance && !this.Leave  && this.renderLogOut()}


      {!this.state.user && !this.state.addEmployee && !this.state.addLeave && !this.state.addAttendance && !this.state.Attendance && !this.Leave  &&  this.rendertoDoList()}
      {this.state.addAttendance && this.renderAddAttendance()}
      {!this.state.user && !this.state.addEmployee && !this.state.addLeave && !this.state.addAttendance && !this.state.Attendance && !this.Leave && this.renderLogOut()}




       {this.state.user && !this.state.addLeave && !this.state.addEmployee && !this.state.addAttendance && !this.state.Attendance && !this.state.Leave &&  !this.rendertoDoList() }
      {this.state.Attendance && this.renderAttendanceList()}
      {this.state.user && !this.state.addLeave && !this.state.addEmployee && !this.state.addAttendance && !this.state.Attendance && !this.Leave  &&  this.renderLogOut()}



      {this.state.back && this.renderTodoList()}
      {this.state.user && this.renderFooter()}
      {!this.state.user && !this.state.addLeave && !this.state.addEmployee && !this.state.addAttendance && !this.state.Attendance &&  !this.rendertoDoList() && this.renderLogin() }

      </div>
    );
  }
}

export default App;
