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
    <div >
      <h1>Image uploading react</h1>
       {data.map((obj) => {
          const base64String = btoa(
            new Uint8Array(obj.img.data.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
            }, "")
          );
          //console.log(base64String)
          return (
            <img
              src={`data:image/png;base64,${base64String}`}
              alt=""
              width="300"
            />
          );
        })}
    </div>
  );
}
export default ViewProperties
//<img id='base64image' {`src='data:image/jpeg;base64,${base64String}}/>
//<img key={index} src={`data:image/jpeg;base64,${singleData.img.data.toString('base64')}`}width="300"/>    