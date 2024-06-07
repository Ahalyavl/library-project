import React from 'react'
import Navbar from './Navbar'

const AddBook = () => {
  return (
    <div>
      <Navbar/>  
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row g-3">
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <label htmlFor="" className="form-label">BOOK TITLE</label>
                <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Category</label>
            <select name="" id="" className="form-control">
                <option value="">Fiction</option>
                <option value="">Biography</option>
                <option value="">Science</option>
            </select>

            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Published Year</label>
            <input type="date" name="" id="" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Author</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Description</label>
            <textarea name="" id="" className="form-control"></textarea>
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Distributer Name</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">publisher Name</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Price</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <label htmlFor="" className="form-label">Edition</label>
            <input type="text" className="form-control" />
            </div>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <button className="btn btn-success">Submit</button>
            </div>
        </div>

        </div>
    </div>
</div>
    </div>
  )
}

export default AddBook