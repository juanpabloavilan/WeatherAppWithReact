import ReportVariable from "./ReportVariable"
import PropTypes from 'prop-types'


const VariablesContainer = ({report}) => {
    return (        
        <div className="report-weather-var-container">                
            <ReportVariable title="Sensación" data={report.main.feels_like} />
            <ReportVariable title="Humedad" data={report.main.humidity} /> 
            <ReportVariable title="Máxima" data={report.main.temp_max} />  
            <ReportVariable title="Mínima" data={report.main.temp_min} />                                  
        </div>        
    )
}
VariablesContainer.propTypes={
    report: PropTypes.object.isRequired
}

export default VariablesContainer
