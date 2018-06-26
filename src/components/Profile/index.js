import React, { Component } from 'react'
import { AboutBlock, HeaderText, LI, Name, Position, ProfileImage, UL } from './Profile.style'
import FadeIn from 'react-fade-in';

class Profile extends Component {
	componentDidMount() {
		console.log('loaded...')
	}

	render() {
		return (
			<FadeIn>
				<ProfileImage>
					<img src={`https://res.cloudinary.com/m4dev/image/upload/v1529938265/img_profile.jpg`} alt="nopparat"/>
					<Name>Nopparat Mueangkaew</Name>
					<Position>Senior Software Developer / Team Lead</Position>

					<AboutBlock>
						<HeaderText>About</HeaderText>
						<UL>
							<LI>I'm has over 3 year experience working as a Senior Software Developer / Team Lead</LI>
							<LI>Currently working at 9Pi Company as a Senior Software Developer / Team Lead within the Backend and Frontend team and Management Team from agile methodology</LI>
						</UL>
					</AboutBlock>
				</ProfileImage>
			</FadeIn>
		)
	}
}

export default Profile
