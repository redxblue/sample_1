import React,{useState} from 'react'
import axios from 'axios'
//import { use } from '../../backend/routes/auth';

function ListProperty() {
  const [formData, setFormData] =useState({
    address: "",
    price:"",
    description:"",
    city:"",
    latitude:"",
    longitude:"",
    state:"",
    zip:"",
  })
  const[filedata,setFileData]=useState(null  )
  const handleOnChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log("form data is being updated ");
    //setAadhar_no(event.target.value)
  }
  const handleOnSubmit=()=>{
    const newFormData = new FormData();
    newFormData.append("address", formData.address);
    newFormData.append("price", formData.price);
    newFormData.append("description", formData.description);
    newFormData.append("city", formData.city);
    newFormData.append("latitude", formData.latitude);
    newFormData.append("state", formData.state);
    newFormData.append("zip", formData.zip);


  }
  return (
    <>
      <h3>list your property</h3>
      <form>
        <div className="form-row ">
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault02">Address</label>
            <input
              type="text"
              className="form-control"
              value={formData.address}
              onChange={handleOnChange}
              id="validationDefault0289"
              name="address"
              placeholder="Address "
              defaultValue=""
              required=""
            />
          </div>
          <div className="col-md-4 mb-3 w-25">
            <label htmlFor="validationDefault02">Price</label>
            <input
              type="number"
              className="form-control"
              value={formData.price}
              onChange={handleOnChange}
              id="validationDefault02"
              name="price"
              placeholder="Price in Ether"
              defaultValue=""
              required=""
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="validationDefault01">Description</label>
            <textarea
              className="form-control"
              value={formData.description}
              onChange={handleOnChange}
              id="exampleFormControlTextarea1"
              name="description"
              rows={3}
              defaultValue={""}
            />
          </div>
        </div>
        <div className="form-row w-25">
          <div className="col-md-6 mb-3 ">
            <label htmlFor="validationDefault03">City</label>
            <input
              type="text"
              className="form-control"
              value={formData.city}
              onChange={handleOnChange}
              id="validationDefault03"
              name="city"
              placeholder="City"
              required=""
            />
          </div>
          <div className="col-md-6 mb-3 ">
            <label htmlFor="validationDefault03">latitude</label>
            <input
              type="text"
              className="form-control"
              value={formData.latitude}
              onChange={handleOnChange}
              id="validationDefault03"
              name="latitude"
              placeholder="latitude"
              required=""
            />
          </div>
          <div className="col-md-6 mb-3 ">
            <label htmlFor="validationDefault03">longitude</label>
            <input
              type="text"
              className="form-control"
              value={formData.longitude}
              onChange={handleOnChange}
              id="validationDefault03"
              name="longitude"
              placeholder="longitude"
              required=""
            />
          </div>

          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault04">State</label>
            <input
              type="text"
              className="form-control"
              value={formData.state}
              onChange={handleOnChange}
              id="validationDefault04"
              name="state"
              placeholder="State"
              required=""
            />
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="validationDefault05">Zip</label>
            <input
              type="number"
              className="form-control"
              value={formData.zip}
              onChange={handleOnChange}
              id="validationDefault05"
              name="zip"
              placeholder="Zip"
              required=""
            />
          </div>
        </div>
        <div className="form-group">
        <div className="form-group">
          <label htmlFor="exampleFormControlFile1"></label>
              <input
                    type="file"
                    className="form-control-file"
                    value={filedata}
                    id="exampleFormControlFile1"
                    name="propertyImage"
                    onChange={(e) => setFileData(e.target.files[0])}
                    />
        </div>
        </div>
      

        <button className="btn btn-primary" type="submit" onClick={handleOnSubmit}>
          Submit form 
        </button>
      </form>
    </>
  );
}

export default ListProperty;
