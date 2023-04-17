import {React,useEffect,useState} from 'react'

function VerifiedRequests() {
 // console.log(MONGODB_URI)
const owner="0x70997970C51812dc3A010C7d01b50e0d17dc79C8"
useEffect(()=>{
    getVerifiedRequest()
})
const [data, setData] = useState([]);
const getVerifiedRequest=async()=>{
    const response = await fetch("http://localhost:5000/userdashboard", {
        method: 'POST', 
        body: JSON.stringify({owner:owner})   
    });
    const json = await response.json()
    console.log(json)
    setData(json)
  }
const publishProperty=(_id)=>{
    console.log(`your property with ID ${_id} has been minted`)

}
  return (
    
      <div className='row'>
      <h2>Verified requests</h2>
      {data.map((obj) => {
        return (
          
          
           <div className="col">
            <div className="card"  style={{ width: "18rem" }}>
                <img className="card-img-top" src={obj.img} alt="Card cap" />
                <div className="card-body">
                <h5 className="card-title">{obj.address}</h5>           {/*`Price:${obj.price}` */}
                <p className="card-text" style={{fontSize:"13px",fontWeight:"600"}}>
                  {obj.description}
                </p>
                <a href="#" className="btn btn-primary">
                View more details
                </a>
                
                <button type="button" key={obj._id}className="btn btn-success my-3" onClick={()=>publishProperty(obj._id)}>Publish to Blockchain</button>
                </div>
                </div>
            </div>

          
        
         
          );
  })}

    </div>
    
  )
}

export default VerifiedRequests
