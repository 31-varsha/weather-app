import React,{useEffect, useState} from "react";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
export default function Test(){
    const [data,setdata]=useState(null);
    const [inputData,setInputData]=useState("chennai");
    useEffect(()=>{
        var apicall=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputData}&appid=bac3775f6bf28eb9e1e707d11e4a02b3`);
        var data=apicall.then((item)=>item.json());
        data.then((value)=>setdata(value));
    },[inputData]);

    const submittingFrom=(event)=>{
        // console.dir(event.target[0].value);
        setInputData(event.target[0].value);
        event.preventDefault()
    }
    // console.log(data.name);
    // console.log(data.weather[0].main);
    return(
        <>
        <div className="overall">
            <h2>Weather Card</h2>
            <form className="box2" onSubmit={(e)=>submittingFrom(e)}>
                <input placeholder="Enter your city name" type="text" required/>
                <button type="submit">
                <ImSearch className="icon1"/>
                </button>
              
            </form>
            <h1>{data?.name}</h1>
            <div>
            <FaCloudShowersHeavy className="icon2"/>
                {/* <h3>{data.length !==0 ? data.weather[0].main:null}</h3> */}
                <h3>{data?.weather[0].main}</h3>
            </div>
            <div className="box1">
                <div>
                    <h5>Humidity</h5>
                    <p>{data?.main.humidity}</p>
                </div>
                <div>
                    <h5>Wind Speed</h5>
                    <p>{data?.wind.speed}</p>
                </div>
            </div>
        </div>
        </>
    )
}