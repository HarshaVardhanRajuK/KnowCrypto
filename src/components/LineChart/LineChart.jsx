import React, { useEffect, useState } from 'react'
import { Chart } from "react-google-charts";


const LineChart = ({history}) => {

    const [data, setData] = useState([["Date", "Prices"]])

    useEffect(() => {
        let copy = [["Date", "Prices"]];
        if(history.prices) {
            history.prices.map(item=>{
                copy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]])
            })
            setData(copy)
        }
    }, [history])

  return (
    <Chart
        chartType='LineChart'
        data={data}
        height="100%"
        legendToggle
    />
  )
}

export default LineChart