import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const AddBook = () => {
    const [data, setData] = useState({
        bookTitle: "",
        author: "",
        publishedyear: "",
        edition: "",
        category: "",
        
        price: ""
       
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    }
    const readValue = () => {
        console.log(data)
        axios.post("https://courseapplogix.onrender.com/addstudents",data).then(
            (Response)=>{
                console.log(Response.data)
                if (Response.data.status ==  "success") {
                    alert("Successfully Added")
                } else {
                    alert("error")
                }
            }
        ).catch(
            (error)=>{
                alert.apply(error.message)
              }
        )

    }
    
    return (
        <div>
            <Navbar />
            <h1><center>LIBRARY APP</center></h1>
            
            
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="fname" className="form-label">BOOK TITLE</label>
                                <input type="text" className="form-control" name=' bookTitle' value={data. bookTitle} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="lname" className="form-label">Author</label>
                                <input type="text" className="form-control" name='author' value={data.author} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="college" className="form-label">PUBLISHED YEAR</label>
                                <input type="text" className="form-control" name=' publishedyear' value={data. publishedyear} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="dob" className="form-label">EDITION</label>
                                <input type="date" className="form-control" name='edition' value={data.edition} onChange={inputHandler} />
                            </div>
                            <div className="col col-12">
                                <label htmlFor="" className="form-label">CATEGORY</label>
                                <select name='' className="form-control" value={data.category} onChange={inputHandler}>
                                    <option value="">Select category</option>
                                    <option value="FICTION">FICTION</option>
                                    <option value="SCIENCE">SCIENCE</option>
                                    <option value="HORROR">HORROR</option>
                                   
                                </select>
                            </div>
                            <div className="col col-12 col-sm-6">
                                <label htmlFor="mob" className="form-label">PRICE</label>
                                <input type="text" className="form-control" name='price' value={data.price} onChange={inputHandler} />
                            </div>
                            
                            <div className="col col-12 col-sm-6">
                                <button className="btn btn-success" onClick={readValue}>SUBMIT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBook
