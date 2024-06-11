import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const AddEmp = () => {
    const [data,setData]=useState(
    {
        "name":"",
        "empNO":"",
        "dep":""
    }
    )
    const inputHandler=(event)=>{
        setData({...data,[event.target.name]:
            event.target.value
        })
    }
    const readValue=()=>{
        console.log(data)
        axios.post("http://localhost:8081/add",data).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("success")
                    
                } else {
                    alert("error")
                    
                }
            }
        ).catch()
    }
  return (
    <div>
        <NavBar/>
        <h1><center>ADD EMPLOYEE</center></h1>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control"name='name'value={data.name}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">EMPNO</label>
                            <input type="text" className="form-control" name='empNO'value={data.empNO}onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">DEPARTMENT</label>
                            <input type="text" className="form-control"name='dep'value={data.dep}onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <br />
                            <center><button className="btn btn-success"onClick={readValue}>Submit</button></center>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmp