import React from 'react'

export const metadata ={
    title:'Contact Us'
}
export default function Contact ()  {
  return (
    <div className='container-fluid py-3'>
        <div className='container'>
               <div className="row">
                <div className="col-md-10">
                    <h3 className="text-large"> Contact Us</h3>
                </div>
                <div className="col-md-10">
                    <div className="row">
                    <form>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        </div>

                        <div className="pt-2">
                           <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                    </div>
                </div>
               </div>
        </div>
    </div>
  )
}

