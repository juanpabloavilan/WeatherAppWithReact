import Button from "./Button"
import Temperature from "./Temperature"
import VariablesContainer from "./VariablesContainer"
import {BiGhost} from 'react-icons/bi'

const Report = ({idCity,report, deleteReport}) => {
    return (
        <div className="report">
            <Button style='close-button' onAction={deleteReport} idCity={idCity}>
                <BiGhost/>
            </Button>
            <h2 className="city-name">{report.name}</h2> 
            <Temperature temperature={report.main.temp} description={report.weather[0].description}/>
            <VariablesContainer report={report}/>
        </div>
    )
}

export default Report
