// Write your code here
import {PieChart, Pie, Cell, Legend} from 'recharts'
import './index.css'

const VaccinationByGender = props => {
  const {vaccineByDetailsGender} = props
  return (
    <div className="gender-cart-container">
      <h1 className="gender">Vaccination by gender</h1>
      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="30%"
          data={vaccineByDetailsGender}
          startAngle={180}
          endAngle={0}
          innerRadius="30%"
          outerRadius="60%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend
          iconType="circle"
          layout="horizontal"
          verticalAlign="middle"
          align="center"
          wrapperStyle={{
            fontFamily: 'Roboto',
            fontSize: 14,
            fontWeight: 700,
            alignItems: 'center',
          }}
        />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
