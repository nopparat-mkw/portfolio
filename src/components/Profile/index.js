import React, { Component } from 'react'
import { LI, Name, Position, ProfileImage, UL } from './Profile.style'

class Profile extends Component {
	render() {
		return (
			<ProfileImage>
				<img src={`https://res.cloudinary.com/m4dev/image/upload/v1529938265/img_profile.jpg`} alt="nopparat"/>
				<Name>Nopparat Mueangkaew</Name>
				<Position>Senior Software Developer / Team Lead</Position>

				<UL>
					<LI>I'm has over 3 year experience working as a Senior Software Developer / Team Lead</LI>
					<LI>Currently working at 9Pi Company as a Senior Software Developer / Team Lead within the Backend and Frontend team and Management Team from agile methodology</LI>
				</UL>
			</ProfileImage>
		)
	}
}

export default Profile
