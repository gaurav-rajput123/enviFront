import React, { useRef, useState } from "react";
import getCookie from "../../utils/getcookie";
import "../../styles/create.css";

export default function Create()
{
    const [product,setProduct]=useState({
        productName:"test", size:"test",category:"test", price:"0",stock:"99",details:"test"
    });
    const [details,setDetails]=useState({
        solarPanel:"test", solarInverter:"test", battery:"test", generation:"test", rooftopArea:"test", height:"test", width:"test", spanDiameter:"test", weight:"test", warranty:"test", monitoring:"test", waterResistant:"test", windWithstandCapacity:"test", verticalGarden:"test", lifetimeSavings:"test", installationPackage:"test"
    })
    const formRef=useRef(null);
    function handleProductChange(e)
    {
        
        const {name,value}=e.target;
        setProduct((old)=>{
            return {
                ...old,
                [name]:value,

            }
        })
        


        

    }
    function handleDetailChange(e)
    {
        const {name,value}=e.target;
        setDetails((old)=>{
            return {
                ...old,
                [name]:value
            }
        })


    }
     async function  handleSubmit(e)
    {
        e.preventDefault();
        
        const form =new FormData(formRef.current);
       form.append('details',JSON.stringify(details));
        
   
        const storage=window.localStorage;
        const userId=storage.getItem('userId');
        const token = getCookie('token');
        try{

            const res=await fetch(`https://api.envinovasmartech.com/api/product/create/${userId}`,{method:'POST',headers:{'Authorization': `Bearer ${token}`},body:form});
        const data= await res.json();
        if(!res.ok)
        {
            return Promise.reject(data);
        }
        else
        {
            alert("product created",data);
            setProduct({});
            setDetails({});
        }
    }
        catch(err){
        console.log(err);
        }
        
    }


   
      
        


  



    return<section className="Upload-Product">

    <form method="POST" encType="multipart/form-data" ref={formRef}>
  
    <label>Product Name</label>
    <input type="text" name="productName" value={product.productName}  onChange={handleProductChange}/>
    <label>size</label>
    <input type="text" name="size" value={product.size} onChange={handleProductChange}/>
    <label>Category</label>
    <input type="text" name="category" value={product.category} onChange={handleProductChange}/>
    <label>Price</label>
    <input type="number" name="price" value={product.price} onChange={handleProductChange}/>
    <label>Stock</label>
    <input type="number" name="stock" value={product.stock} onChange={handleProductChange}/>
    <label>Product Images</label>
    <input type="file" name="productImage" multiple onChange={handleProductChange}/>
    </form>
    {/* *********************************details *****************************/}
    <label>Solar Panel</label>
    <input type="text" name="solarPanel" value={details.solarPanel} onChange={handleDetailChange}></input>
    <label>Solar Inverter</label>
    <input type="text" name="solarInverter" value={details.solarInverter} onChange={handleDetailChange}></input>
    <label>battery</label>
    <input type="text" name="battery" value={details.battery} onChange={handleDetailChange}></input>
    <label>generation</label>
    <input type="text" name="generation" value={details.generation} onChange={handleDetailChange}></input>
    <label>Roof top Area</label>
    <input type="text" name="rooftopArea" value={details.rooftopArea} onChange={handleDetailChange}></input>
    <label>Height</label>
    <input type="text" name="height" value={details.height} onChange={handleDetailChange}></input>
    <label>width</label>
    <input type="text" name="width" value={details.width} onChange={handleDetailChange}></input>
    <label>SpanDiameter</label>
    <input type="text" name="spanDiameter" value={details.spanDiameter} onChange={handleDetailChange}></input>
    <label>Weight</label>
    <input type="text" name="weight" value={details.weight} onChange={handleDetailChange}></input>
    <label>Warranty</label>
    <input type="text" name="warranty" value={details.warranty} onChange={handleDetailChange}></input>
    <label>Water Resistant</label>
    <input type="text" name="waterResistant" value={details.waterResistant} onChange={handleDetailChange}></input>
    <label>monitoring</label>
    <input type="text" name="monitoring" value={details.monitoring} onChange={handleDetailChange}></input>
    <label>Wind withstand Capacity</label>
    <input type="text" name="windWithstandCapacity" value={details.windWithstandCapacity} onChange={handleDetailChange}></input>
    <label>Vertical Garden</label>
    <input type="text" name="verticalGarden" value={details.verticalGarden} onChange={handleDetailChange}></input>
    <label>Life Time Savings</label>
    <input type="text" name="lifetimeSavings" value={details.lifetimeSavings} onChange={handleDetailChange}></input>
    <label>Installation Package</label>
    <input type="text" name="installationPackage" value={details.installationPackage} onChange={handleDetailChange}></input>
    
    {/***********************details end***************8*/}
   
    <button type="submit" onClick={handleSubmit} >Upload Product</button>
    </section> 
}