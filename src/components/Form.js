import { useState } from 'react';


function Form(props){
    const [productData,setProductData]=useState({name:'',price:''});
    function changeHandler(e,type){
        setProductData((prev)=>{
            return({...prev,[type]:e.target.value})
        })
    }
    function submitHandler(e){
        e.preventDefault();
        props.sett(productData);
        setProductData({name:'',price:''});
    }
return(
    <div>
        <form onSubmit={submitHandler}>
        <div>
            <label>Name:</label>
            <input type='text' value={productData.name} onChange={(e)=> changeHandler(e,'name')}/>
         </div>
         <div>
            <label> Price:</label>
            <input type='number' value={productData.price} onChange={(e)=> changeHandler(e,'price')}/>
         </div>
         <div>
            <input type='submit'/>
         </div>
        </form>
    </div>
);
}

export default Form;