const ReportVariable = ({data, title}) => {
    return (
        <div className="report-weather-var">
            <span className="report-weather-var-data">{data}</span>
            <span className="report-weather-var-title">{title}</span>
        </div> 
    )
}

ReportVariable.defaultProps={
    data: "N/A",
    title: "N/A"
}
export default ReportVariable
