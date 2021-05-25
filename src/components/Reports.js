import Report from "./Report";

const Reports = ({reports, deleteReport}) => {
    return (
        <div className="reports-container">
            {
                reports.map((report)=>{
                    return (
                        <Report key={report.id} report={report.res} deleteReport={deleteReport} idCity={report.id}/>
                    )
                })
            }
            
        </div>
    )
};

export default Reports;
