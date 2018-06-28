import React, { Component } from 'react'
import { AboutBlock, HeaderText, LI, Name, Position, ProfileImage, UL } from './Profile.style'
import FadeIn from 'react-fade-in';
import { inject, observer } from 'mobx-react';

@inject('portfolio')
@observer
class Profile extends Component {
	render() {
		const { about } = this.props.portfolio
		
		return (
			<FadeIn>
					<ProfileImage>
						<img src={about.image_url} alt="nopparat"/>
						<Name>{about.name}</Name>
						<Position>{about.position}</Position>

						<AboutBlock>
							<HeaderText>About</HeaderText>
							<UL>
								{
									Object.keys(about.details).map((_keys) => 
										<LI key={_keys}>{about.details[_keys].title}</LI>
									)
								}
							</UL>
						</AboutBlock>
					</ProfileImage>
			</FadeIn>
		)
	}
}

export default Profile
