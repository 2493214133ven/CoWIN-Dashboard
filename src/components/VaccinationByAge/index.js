// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByAge = props => {
  const {vaccineByDetailsAge} = props
  return (
    <div className="age-cart-container">
      <h1 className="age">Vaccination by age</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="30%"
          data={vaccineByDetailsAge}
          outerRadius="55%"
          dataKey="count"
        >
          <Cell name="18-44" fill="#2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
          wrapperStyle={{
            fontFamily: 'Roboto',
            bottom: 15,
            fontSize: 14,
            fontWeight: 700,
          }}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
