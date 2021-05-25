import Header from "./components/Header"
import Reports from "./components/Reports"
import SearchBar from "./components/SearchBar"
import React, {useState, useEffect} from 'react'


const App = () => {
  const [reports, setReports] = useState([
    {
     id: Math.floor(Math.random()*10000+1),
     res:{
      name: "Bucharest", 
      main: {
        feels_like:12,
        humidity: 45,
        temp: 18,
        temp_max: 18,
        temp_min:18
      },     
      weather:[{
        id:803,
        main: "clouds",
        description: "muy nuboso",
        icon: "04d"
      }]
     }
     
    }])

  const deleteReport=(idCity)=>{
    console.log("deleter FROM APP");
    setReports(reports.filter(report=>report.id !== idCity))
  }

  const addReportsObject={

    addReportByLocation(lat=4.7174827, lon=-74.1122391){
      fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&cnt=1&appid=fafa5259fe750bc695086582a0aa5b5c`)
        .then(res=>res.json()).then(res=>{
          if(res.cod==='404'){
            console.log('There was an error getting the current location')
          }else{
            console.log(res);
            setReports([{id:Math.floor(Math.random()*10000+1), res}, ...reports])
          }
        })
    },
  
    addReport(city){
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=fafa5259fe750bc695086582a0aa5b5c
      `).then(res=>res.json()).then(res=>{
        if(res.cod === '404'){
          console.log("error")
        }else{
          setReports([{id:Math.floor(Math.random()*10000 + 1 ), res}, ...reports ])
        }
      })    
    } 
  };
  

  
  
  return (
    <div className='body'>
      <Header titulo="Weather App" numero={1}/>
      <main> 
          <SearchBar placeholder="Buscar Ciudad por Nombre" addReportsObject={addReportsObject}/>        
            {reports && <Reports reports={reports} deleteReport={deleteReport}/>}        
      </main>
      
      
    </div>
  )
}

export default App
