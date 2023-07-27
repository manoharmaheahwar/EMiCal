import React, { useState } from 'react'

export default function EmiCaklculator() {
    // style="font-weight: bolder; color: rgb(36, 34, 35);"

    const [amount,setAmount]=useState(20000);
    const [year,setYear]=useState(1);
    const [interest,setInterest]=useState(1);
    const [total,settotal]=useState("");

    function calculate(){
        let sumtotal= (amount*(interest*0.01))/year;
        let result=((((amount/year)+sumtotal))/12)*year;
        settotal(result);
    }

  return (

    <div className='container'>
       <h3 className='headername'>EMI Calculator</h3>

       <div className="emiContainer">

            <div className='amountContainer'>
                <label htmlFor="">Amount you need </label>
                <input id="txtAmount" onChange={(e)=>setAmount(e.target.value)} type="text"  value={amount}  /><br /><br />
                <div className='slideContainer'>20,000 <label htmlFor=""></label>
                    <input className="slideAmount" min={20000} step={1000} max={400000}  value={amount} onChange={(e)=>setAmount(e.target.value)} type="range"/> 400000
                </div>
            </div>

            <div className="yearContainer">
                <label htmlFor=""> for </label>
                <input id="txtYear" onChange={(e)=>setYear(e.target.value)} value={year} type="text"  /> Year
                <br /><br />
                <div className="slideContainer">1 Year <label htmlFor=""></label>
                    <input type='range' onChange={(e)=>setYear(e.target.value)} min={1} max={20} step={1} value={year} id='slideYear'></input> 20 Year
                </div>
            </div>

            <div className="interestContainer">
                <label htmlFor=""> Interest rate </label>
                <input id="txtInterest" onChange={(e)=>setInterest(e.target.value)} value={interest} type="text"/> %<br /><br />
                <div className="slideContainer">1% <label htmlFor=""></label>
                    <input type='range' onChange={(e)=>setInterest(e.target.value)} min={1} max={12} step={1} value={interest} id='slideInterest'></input> 12%
                </div>
            </div>
       </div> <br />

       {total?<h3 align="center"  id="result">Your monthly EMI {Math.floor(total)}/-</h3>:<h3>{total}</h3>}
       <button className='button' onClick={calculate}> Calculate </button>
       
    </div>
  )
}
