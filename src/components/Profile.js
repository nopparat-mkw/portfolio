import React, { Component } from 'react'
import FadeIn from 'react-fade-in'
import styled from 'styled-components'

export default class Profile extends Component {
	state = {
		data: {
			image_url: '',
			name: '',
			position: '',
			about: [],
		},
	}

	componentDidMount() {
		fetch('data/profile.json')
			.then((res) => res.json())
			.then((json) => this.setState({ data: json }))
	}

	render() {
		const { image_url, name, position, about } = this.state.data
		return (
			<FadeIn>
				<ProfileImage>
					<img src={image_url} alt="nopparat" />
					<Name>{name}</Name>
					<Position>{position}</Position>

					<AboutBlock>
						<HeaderText>About</HeaderText>
						<UL>
							{about.map((item) => (
								<LI key={item.id}>{item.title}</LI>
							))}
						</UL>
					</AboutBlock>
				</ProfileImage>
			</FadeIn>
		)
	}
}

const ProfileImage = styled.div`
	margin-top: 25px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	img {
		width: 12em;
		height: 12em;
		border-radius: 50%;
		border: 1px solid #ebebeb;
	}
`

const Name = styled.div`
	font-size: 36px;
	margin-top: 20px;
	margin-bottom: 10px;

	@media only screen and (max-width: 480px) {
		font-size: 26px;
	}
`

const Position = styled.div`
	font-size: 30px;
	font-style: italic;

	@media only screen and (max-width: 480px) {
		font-size: 20px;
	}
`

const AboutBlock = styled.div`
	margin-top: 50px;
`

const UL = styled.ul``

const LI = styled.li`
	margin-bottom: 10px;
`
const HeaderText = styled.h1`
	font-style: ;
`
