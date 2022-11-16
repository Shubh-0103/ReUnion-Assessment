import React from 'react'
// cards section with props filter data 
export default function Cards({ filterData }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    {
                        filterData.map(data => {
                            return (
                                // Card of Property
                                <div class="card m-3 d-inline-block" style={{ width: "18rem" }}>
                                    {/* Image of Property */}
                                    <img 
                                    src={data.img} 
                                    class="card-img-top"
                                     alt={data.location} 
                                     style={{ height: "10rem", objectFit: "cover" }} />
                                     {/* Second Half of card */}
                                    <div class="card-body">
                                        {/* Price */}
                                        <h5 class="card-title text-primary d-inline-block">{`${data.price}`}</h5><p className='d-inline-block'>/month</p>
                                        {/* location */}
                                        <h6 class="card-subtitle mb-2 text-muted">{data.location}</h6>
                                        {/* Availibilty Date of Property */}
                                        <h6 class="card-subtitle mb-2 text-muted">Available From: {data.availability}</h6>
                                        {/* Address */}
                                        <p class="card-text">{data.address}</p>
                                        <a href="#" class="btn btn-primary">Check this property</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}