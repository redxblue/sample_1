import axios from "axios";
import { useState, useEffect } from "react";

function ViewProperties() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/viewproperties")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));
  });
  return (
    <div className="" >
      <h2>Homes near you</h2>
      <div className="row ">
        {console.log(data)}
       {data.map((obj) => {
          const base64String = btoa(
            new Uint8Array(obj.img.data.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
            }, "")
          );
          //console.log(base64String)
          return (
            
             <div className="col">
              <div className="card" style={{ width: "18rem" }}>
                  <img className="card-img-top" src={`data:image/png;base64,${base64String}`} alt="Card image cap" />
                  <div className="card-body">
                  <h5 className="card-title">{obj.address}</h5>           {/*`Price:${obj.price}` */}
                  <p className="card-text" style={{fontSize:"13px",fontWeight:"600"}}>
                    {obj.description}
                  </p>
                  <a href="#" className="btn btn-primary">
                  View more details
                  </a>
                  </div>
                  </div>
              </div>

            
            );
    })} {/*<--- map bracket */}
    </div>
    </div>
  );
}
export default ViewProperties
//<img id='base64image' {`src='data:image/jpeg;base64,${base64String}}/>
//<img key={index} src={`data:image/jpeg;base64,${singleData.img.data.toString('base64')}`}width="300"/>    