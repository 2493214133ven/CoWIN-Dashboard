// Write your code here
import {BarChart, Bar, XAxis, YAxis, Legend} from 'recharts'
import './index.css'

const VaccinationCoverage = props => {
  const {vaccineDetails} = props
  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="barChart-container">
      <h1 className="coverage">Vaccination Coverage</h1>
      <BarChart
        width={1000}
        height={500}
        data={vaccineDetails}
        margin={{
          top: 16,
        }}
      >
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: '#94a3b8',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: '#cbd5e1',
            strokeWidth: 1,
          }}
        />
        <Legend
          wrapperStyle={{
            fontFamily: 'Roboto',
            padding: 30,
            fontWeight: 700,
            fontSize: 16,
            align: 'center',
          }}
        />
        <Bar
          dataKey="dose1"
          name="Dose 1"
          fill="#5a8dee"
          radius={[10, 10, 0, 0]}
          barSize="20%"
        />
        <Bar
          dataKey="dose2"
          name="Dose 2"
          radius={[12, 12, 0, 0]}
          fill="#f54394"
          barSize="23%"
        />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
