import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const ViewBook = () => {
    const [data, changeData] = useState([])
    const fetchdata = () => {
      axios.get("https://friendsapi-re5a.onrender.com/view").then((response)=>{
        changeData(response.data)
        console.log(response.data)
      }).catch ((error)=>{
        alert.apply(error.message)
      })
    }

    useEffect(
      ()=>{fetchdata()},[]
    )
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">BOOK TITLE </th>
                                        <th scope="col">AUTHOR</th>
                                        <th scope="col">PUBLISHED YEAR</th>
                                        <th scope="col">EDITION</th>
                                        <th scope="col">CATEGORY</th>
                                        <th scope="col">PRICE</th>
                                       
                                        
                                        
                                        
                                </tr>
                            </thead>
                            {data.map(
                                (value, index) => {
                                    return <tbody>
                                        <tr>
                                            <th scope="row">{value.bookTitle}</th>
                                            <td>{value.author}</td>
                                            <td>{value.publishedYear}</td>
                                            <td>{value.edition}</td>
                                            <td>{value.category}</td>
                                            <td>{value.price}</td>
                                            
                                            
                                        </tr>

                                    </tbody>
                                }
                            )}

                         </table>

                     </div>
                 </div>
             </div>

     </div>
    )
}

export default ViewBook