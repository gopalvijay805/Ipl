import {Component} from 'react'

import './index.css'

class LatestMatch extends Component {
  render() {
    const {latestMatch} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      firstInnings,
      manOfTheMatch,
      secondInnings,
      umpires,
      venue,
      result,
    } = latestMatch

    return (
      <div className="latest-match-container">
        <h1 className="match-heading">Latest Matches</h1>
        <div className="match-card">
          <div className="match-logo-container">
            <div className="match-details-container">
              <p className="team-match-title">{competingTeam}</p>
              <p className="match-date">{date}</p>
              <p className="match-date">{venue}</p>
              <p className="match-date">{result}</p>
            </div>
            <img
              src={competingTeamLogo}
              className="latest-match-team-logo"
              alt={`latest match ${competingTeam}`}
            />
          </div>
          <div className="match-info-container">
            <div className="match-details-2">
              <p className="match-label">First Innings</p>
              <p className="label-value">{firstInnings}</p>
            </div>
            <div className="match-details-2">
              <p className="match-label">Second Innings</p>
              <p className="label-value">{secondInnings}</p>
            </div>
            <div className="match-details-2">
              <p className="match-label">Man Of The Match</p>
              <p className="label-value">{manOfTheMatch}</p>
            </div>
            <div className="match-details-2">
              <p className="match-label">Umpires</p>
              <p className="label-value">{umpires}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default LatestMatch
