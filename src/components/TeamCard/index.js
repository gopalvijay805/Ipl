import {Component} from 'react'

import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamsData} = this.props
    const {name, teamImageURL, id} = teamsData
    return (
      <Link to={`/team-matches/${id}`} className="link-item">
        <li className="teams-card">
          <img src={teamImageURL} alt="name" className="image" />
          <p className="title">{name}</p>
        </li>
      </Link>
    )
  }
}
export default TeamCard
