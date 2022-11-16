import React from 'react'

export default function Cards({ filterData }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col'>
                    {
                        filterData.map(data => {
                            return (
                                <div class="card m-3 d-inline-block" style={{ width: "18rem" }}>
                                    <img src={data.img} class="card-img-top" alt="..." style={{ height: "10rem", objectFit: "cover" }} />
                                    <div class="card-body">
                                        <h5 class="card-title text-primary d-inline-block">{`${data.price}`}</h5><p className='d-inline-block'>/month</p>
                                        <h6 class="card-subtitle mb-2 text-muted">{data.location}</h6>
                                        <h6 class="card-subtitle mb-2 text-muted">Available From: {data.availability}</h6>
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