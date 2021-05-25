import React from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {useState} from 'react'
import Button from './Button';

const SearchBar = ({placeholder, addReportsObject}) => {
    const [city, setCity]=useState('');

    //Previene el evento por defecto, garantiza parametro valido y llama a 
    //addReport para que busque el reporte dado
    const onSubmit=(e)=>{
        e.preventDefault()
        if(!city){
            alert('Agrega una ciudad')
            return
        }
        addReportsObject.addReport(city)
        setCity('')
        
    }

    const addReportByLocation=()=>{
        let [lat, lon]= [0, 0]
        getCurrentLocation()
            .then(report=>{
                lat=report.coords.latitude
                lon=report.coords.longitude
                console.log(lat, lon );
            })
            .catch(err => console.log(err))
        addReportsObject.addReportByLocation()
    }

    function getCurrentLocation(){
        return new Promise((resolve, reject)=>{
            navigator.geolocation.getCurrentPosition(resolve, reject)
        }            
        )
    }

    
    return (
       <section>  
            <h1>Encuentra los pronósticos del tiempo<br/> para tu ciudad</h1>
            <form className='search-bar-container' onSubmit={onSubmit}>
                <input className='text' placeholder={placeholder} value={city} onChange={e=>setCity(e.target.value)}/>
                <button className='button'>
                    <BiSearchAlt/>
                </button>
            </form>
                <Button style="btn-current-location-weather" onAction={addReportByLocation}>
                    <p>Get from current location</p>
                </Button>
        </section>
    )
}

export default SearchBar
