import React, { useEffect, useState } from "react";

export default function SearchFilter({ data, setFilteredData, location, setLocation, date, setDate, minPrice, setMinPrice, maxPrice, setMaxPrice, type, setType }) {

    const [locationInput, setLocationInput] = useState("")
    const locationsList = ["New Delhi", "Bangalore", "Kolkata"]
    const [locationSuggestList, setLocationSuggestList] = useState(locationsList)
    const [priceDisable, setPriceDisable] = useState(false)

    useEffect(() => {
        if (locationInput)
            locationListUpdate(locationInput)
        else
            setLocationSuggestList(locationsList)
    }, [locationInput])
    const applyFilterHandle = () => {
        console.log(date)
        let filteredData = data.filter(val => {
            let locationFilter = false, dateFilter = true, priceFilter = true, typeFilter = true;
            if (location) {
                if (location.toLowerCase() == val.location.toLowerCase())
                    locationFilter = true;
            }
            else
                locationFilter = true
            if (date) {
                if (new Date(date).getTime() >= new Date(val.availability).getTime())
                    dateFilter = true
                else
                    dateFilter = false
            }
            if (!priceDisable) {
                priceFilter = val.price >= minPrice && val.price <= maxPrice
            }
            if (type) {
                typeFilter = val.type.toLowerCase() == type.toLowerCase()
            }
            if (locationFilter && dateFilter && priceFilter && typeFilter)
                return val
        })
        setFilteredData(filteredData)
    }
    const locationListUpdate = (val) => {
        let locationListFilter = locationSuggestList.filter(data => {
            console.log(data, val, new RegExp(val.toLowerCase()).test(data.toLowerCase()))
            if (new RegExp(val.toLowerCase()).test(data.toLowerCase()))
                return data
        })
        setLocationSuggestList(locationListFilter)
    }
    return (
        <div class="container mt-5">
            <div className="row">
                <div className="col">
                    <h1 className="text-start">Search properties to Rent</h1>
                </div>
                <div className="col d-flex justify-content-end">
                    <form className="w-50">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-6 col-md-2">
                    <form className="position-relative">
                        <input class="form-control me-2" type="search" value={location ? location : locationInput} aria-label="Location" onChange={(e) => { setLocationInput(e.target.value); setLocation("") }} />
                        <p className="position-absolute bg-white fw-lighter" style={{ top: "-10px", left: "10px", fontSize: "0.8rem" }}>Location</p>
                    </form>
                    {locationInput && !location && <div>
                        <div class="list-group position-absolute" style={{ zIndex: 2 }}> {locationSuggestList.map(location => {
                            console.log(location)
                            return (
                                <button type="button" class="list-group-item list-group-item-action" onClick={() => { setLocation(location) }}>
                                    {location}
                                </button>
                            )
                        })
                        }</div>
                    </div>}
                </div>
                <div className="col-6 col-md-2">
                    <form className="position-relative">
                        <input class="form-control me-2" type="date" placeholder="When" aria-label="when" onChange={(e) => e.target.value ? setDate(new Date(e.target.value)) : setDate("")} />
                        <p className="position-absolute bg-white fw-lighter" style={{ top: "-10px", left: "10px", fontSize: "0.8rem" }}>When</p>
                    </form>
                </div>
                <div className="col-8 mt-4 mt-md-0 col-md-5">
                    <div className="row border rounded position-relative p-2">

                        <div className="col-4 position-relative">
                            <p className="position-absolute bg-white fw-lighter" style={{ bottom: "-1px", right: "0px", fontSize: "0.8rem" }}>Min</p>
                            <input class="form-control pt-0 pb-0 d-inline-block" type="number" disabled={priceDisable} value={minPrice}
                                onChange={(e) => {
                                    setMinPrice(parseFloat(e.target.value < maxPrice ? e.target.value : minPrice));
                                    if (parseFloat(e.target.value) > maxPrice)
                                        window.alert("Min Price always less than equal to Max Price")
                                }
                                } />

                        </div>
                        <div className="col-4 position-relative">
                            <p className="position-absolute bg-white fw-lighter" style={{ bottom: "-1px", right: "0px", fontSize: "0.8rem" }}>Max</p>

                            <input class="form-control pt-0 pb-0 d-inline-block" type="number" disabled={priceDisable} value={maxPrice} onChange={(e) => {
                                if (parseFloat(e.target.value) < minPrice)
                                    window.alert("Min Price always less than equal to Max Price")
                                setMaxPrice(parseFloat(e.target.value > minPrice ? e.target.value : maxPrice))
                            }
                            }
                            />

                        </div>
                        <div className="col-3">
                            <input class="form-check-input" type="checkbox" value={priceDisable} onChange={(e) => { setPriceDisable(e.target.checked) }} id="flexCheckDefault" />
                            <label class="form-check-label ms-1" for="flexCheckDefault">
                                Disable
                            </label>
                        </div>

                        <p className="position-absolute bg-white fw-lighter p-0" style={{ top: "-10px", left: "10px", fontSize: "0.8rem", width: "auto" }}>Price</p>

                    </div>
                </div>
                <div className="col-4 mt-4 mt-md-0 col-md-2">
                    <form className="position-relative">
                        <select class="form-select" aria-label="Default select example" value={type} onChange={(e) => setType(e.target.value)}>
                            <option selected value="">None</option>
                            <option value="House">House</option>
                            <option value="Flat">Flat</option>
                            <option value="Hall">Hall</option>
                        </select>
                        <p className="position-absolute bg-white fw-lighter p-0" style={{ top: "-10px", left: "10px", fontSize: "0.8rem", width: "auto" }}>Property Type</p>

                    </form>
                </div>
                <div className="col-12 mt-4 mt-md-0 col-md-1">

                    <button class="form-control bg-primary text-white" onClick={applyFilterHandle}>Search</button>

                </div>
            </div>
        </div>
    )
}