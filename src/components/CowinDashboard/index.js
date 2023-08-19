// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

const apiStatusContainer = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  in_progress: 'INPROGRESS',
}

class CowinDashboard extends Component {
  state = {coWinVaccineDetails: {}, apiStatus: apiStatusContainer.initial}

  componentDidMount() {
    this.getVaccineDetails()
  }

  getVaccineDetails = async () => {
    this.setState({apiStatus: apiStatusContainer.in_progress})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')

    if (response.ok) {
      const data = await response.json()
      const updateData = {
        last7DaysVaccination: data.last_7_days_vaccination.map(vaccine => ({
          vaccineDate: vaccine.vaccine_date,
          dose1: vaccine.dose_1,
          dose2: vaccine.dose_2,
        })),
        vaccinationByAge: data.vaccination_by_age,
        vaccinationBGender: data.vaccination_by_gender,
      }
      this.setState({
        coWinVaccineDetails: updateData,
        apiStatus: apiStatusContainer.success,
      })
    } else {
      this.setState({apiStatus: apiStatusContainer.failure})
    }
  }

  renderCoWinDashboard = () => {
    const {coWinVaccineDetails} = this.state

    return (
      <>
        <VaccinationCoverage
          vaccineDetails={coWinVaccineDetails.last7DaysVaccination}
        />
        <VaccinationByGender
          vaccineByDetailsGender={coWinVaccineDetails.vaccinationBGender}
        />
        <VaccinationByAge
          vaccineByDetailsAge={coWinVaccineDetails.vaccinationByAge}
        />
      </>
    )
  }

  renderFailure = () => (
    <div className="failure-image-container">
      <img
        className="failure-image"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="something-wrong">Something went wrong</h1>
    </div>
  )

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSwitchComponents = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusContainer.success:
        return this.renderCoWinDashboard()
      case apiStatusContainer.failure:
        return this.renderFailure()
      case apiStatusContainer.in_progress:
        return this.renderLoading()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="coWin-app-container">
        <div className="logo-and-co-win-in-india-country">
          <div className="logo-co-win-cart">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
            />
            <p className="co-win-logo-title">Co-WIN</p>
          </div>
          <h1 className="vaccination-in-india">CoWIN Vaccination in india</h1>
        </div>
        {this.renderSwitchComponents()}
      </div>
    )
  }
}
export default CowinDashboard
