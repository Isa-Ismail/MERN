import React from 'react'
import { useSelector } from 'react-redux'

const Alert = () => {

    const data = useSelector(data => data.alert)
    
    return (
        <div>
            {data.map(alert => {
                return(
                <p style = {{ color: 'red' }}>
                    {alert.msg}
                </p>
                )
            })}
        </div>
    )
}

export default Alert
