import React,{useState,useEffect} from 'react'
import axios from 'axios'
import FileUploaded from './FileUploaded'
//import { use } from '../../backend/routes/auth';

function ListProperty() {

  let base64Code="";
  const getBase64=(file, cb)=>{
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
        cb(reader.result)
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
}
const[filedata,setFileData]=useState(null)
// useEffect(()=>{
//   getBase64(filedata, (result) => {
//     base64Code = result;
//   });
//   console.log(base64Code)
// },[filedata])



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
  if(formData.zip.length>6){
    setFormData({
      ...formData,
      ["zip"]: formData.zip.slice(0,6)
    }); 
  }

  const handleOnChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    console.log("form data is being updated ");
    //setAadhar_no(event.target.value)
  }
  const handleOnSubmit=(e)=>{
    e.preventDefault()
    getBase64(filedata, async(result) => {
      base64Code = result;
      console.log(base64Code)
      const response = await fetch("http://localhost:5000/listproperty", {
        method: 'POST', /////////////////////////////Fetching from DB///////////////
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({address:formData.address,
          price:formData.price,
          description:formData.description,
          img:base64Code,
          city:formData.city,
          coordinates:{latitude:formData.latitude,
            longitude:formData.longitude},
            state:formData.state,
            zip:formData.zip,
                  
        })
    });
    });



    // const data = new FormData();
    // data.append("address", formData.address);
    // data.append("price", formData.price);
    // data.append("description", formData.description);
    // data.append("city", formData.city);
    // data.append("coordinates[latitude]", formData.latitude);
    // data.append("coordinates[longitude]", formData.longitude);
    // data.append("state", formData.state);
    // data.append("zip", formData.zip);
    // data.append("testImage", filedata); 
    // console.log(filedata)
    


  //   fetch("http://localhost:5000/listproperty", {
  //     body: data,
  //     headers: {
           
  //     },
  //     method: "post",
  // }).then((response) => {
  //   console.log(JSON.stringify(response.data));
  //   })
  //   .catch((error) => {
  //     console.error(error.response.data);
  //   });
  //   console.log(data)



    // let config = {
    //   method: 'post',
    //   maxBodyLength: Infinity,
    //   url: 'http://localhost:5000/listproperty',
    //   headers: { 
    //     'Accept': '*/*', 
    //     'Content-Type': 'multipart/form-data'
    //   },
    //   data : data
    // };
     
    // axios.request(config)
    // .then((response) => {
    // console.log(JSON.stringify(response.data));
    // })
    // .catch((error) => {
    //   console.error(error.response.data);
    // });
    // console.log(data)


  };
  return (
    <div className="row my-10" style={{margin:"12px"}}>
      <h3>List your property</h3>
      <form action="/listproperty"method="POST" encType="multipart/form-data"> 
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
        <FileUploaded  onFileSelect={(file) => setFileData(file)}></FileUploaded>
        
      

        <button className="btn btn-primary" type="submit" onClick={handleOnSubmit}>
          Submit for verification 
        </button>
      </form>
      
    </div>
  );
}

export default ListProperty;
