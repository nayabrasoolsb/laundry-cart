import React, { useEffect, useState } from "react"
import HeaderWithUsername from "../components/HeaderWithUsername"
import "../styles/createOrder.css"
import SmallFooter from "../components/SmallFooter"

function Product(props){
const {image,productType,description,washingRate,ironingRate,towelRate,bleach} = props.data
const [quant , setQuant] = useState()
const [washtype , setWashtype] = useState("0")
const [total , settotal] = useState()

return(<div className="product">
    <img src={image} className="heroImg" />
    <h6 className="productName">{productType}</h6>
    <h6 className="description">{description}</h6>
    <input type="text" className="quantity" onChange={(e)=>{setQuant(e.target.value)}} value = {quant}/>
    <button className="btn"><img src="./images/washing-machine.png" className="washImg" onClick={()=>{
        setWashtype(parseInt(washtype+washingRate))
    }}/></button>
    <button className="btn"><img src="./images/ironing-1.png" className="ironImg" onClick={()=>{
        setWashtype(parseInt(washtype+ironingRate))
    }}/></button>
    <button className="btn"><img src="/images/towel.png" className="towelImg" onClick={()=>{
        setWashtype(parseInt(washtype+towelRate))
    }}/></button>
    <button className="btn"><img src="/images/bleach-1.png" className="bleachImg" onClick={()=>{
        setWashtype(parseInt(washtype+bleach))
    }}/></button>
    <span className="ans" value = {`${quant} X ${washtype}= `}>{washtype * quant}</span>
    <button className="reset"><h6 className="textBtn">Reset</h6></button>

</div>)
}

export default function CreateOrder(){
    const [productList , setProductList] = useState([])
    useEffect(()=>{
        async function datafetch(){
        const res = await fetch('http://localhost:5000/createOrder')
        const data = await res.json()
        setProductList(data)
        }
        datafetch();
    },[])
    return (<div>
        <HeaderWithUsername/>
        <div id="search">
            <p id="createText">CreateOrder</p>
            <span id="iconImg"><img src="./images/search.png" id="iconImage"/><span id="line">_____________</span></span>
        </div>
    <div id="table">
    <div className="head">
        <h3 id="type">Product Types</h3>
        <h3 id="quant">Quantity</h3>
        <h3 id="wash">Wash Type</h3>
        <h3 id="price">Price</h3>
    </div>
    <div >
        {productList.map((iter,index)=>{
            return (<Product data = {iter} key = {index} />)
        })}
    </div>
    </div>
    <div id="btncontainer">
        <button id="proceed"><p id="proceedText">Proceed</p></button>
        <button id="cancel"><p id="cancelText">Cancel</p></button>
    </div>
    <div id="orderfooter">
    <SmallFooter/>
    </div>
    </div>)
}