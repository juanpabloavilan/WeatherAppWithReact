

const Button = ({children, style, onAction, idCity}) => {
    const evento=(e)=>{
        onAction(idCity=0)
    }
    return (
        <div className={`button ${style}`} onClick={evento}>
            {children}        
        </div>
    )
}

export default Button
