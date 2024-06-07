import React, { useState } from 'react'
import Navbar from './Navbar'

const ViewAll = () => {
    const [data, changeData] = useState(
        [
            { "title": "Alchemist", "Author": "paulo cohelo", "price": 999 },
            { "title": "Halfgirlfriend", "Author": "chetan bhagat", "price": 555 },
            { "title": "devdas", "Author": "sarat chandra", "price": 888 }





        ]
    )

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">title</th>
                                    <th scope="col">Author</th>
                                    
                                    <th scope="col">price</th>
                                </tr>
                            </thead>

                            {data.map(
                                (value,index)  => {
                            return  <tbody>
                                <tr>
                                    <th scope="row">{value.title}</th>
                                    <td>{value.Author}</td>
                                    
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

export default ViewAll