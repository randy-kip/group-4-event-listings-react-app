import React, { Fragment } from "react";
import Form from 'react-bootstrap/Form';

function FilterType({ filterParam, setFilterParam }) {
    
    return (
        <Fragment>   
       
            <Form.Select 
                style={{width: "30%"}}
                
                aria-label="Default select example"
                // new value of selection becomes the filterParam
                onChange={(e) => {
                    setFilterParam(e.target.value);
                }}
            >
                <option value="All">Filter by Type of Event</option>
                <option value="Sherehe">Sherehe</option>
                <option value="Food">Food</option>
                <option value="Wedding">Wedding</option>
                <option value="Romance">Romance</option>
                <option value="Education">Education</option>
                <option value="Fashion">Fashion</option>
                <option value="Religious">Religious</option>
                <option value="Art">Art</option>
                <option value="Sports">Sports</option>
                
            </Form.Select>
        </Fragment>
    )

}

export default FilterType;