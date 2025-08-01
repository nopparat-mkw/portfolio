import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import axios from 'axios';
import localforage from 'localforage';

const Profile = () => {
    const [data, setData] = useState({
        image_url: '',
        name: '',
        position: '',
        about: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
				const cachedData = await localforage.getItem('profile_data');
				if (cachedData) {
					setData(cachedData);
				}

                const response = await axios.get('data/profile.json');
                setData(response.data);
                // Update cache
                await localforage.setItem('profile_data', response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const { name, position, about } = data;

    return (
        <FadeIn>
            <ProfileImage>
                <picture>
					<img srcSet={`${process.env.PUBLIC_URL}/img_profile.jpg`} src={`${process.env.PUBLIC_URL}/img_profile.jpg`} loading="lazy" alt="nopparat" />
				</picture>
                <Name>{name}</Name>
                <Position>{position}</Position>

                <AboutBlock>
                    <HeaderText>About</HeaderText>
                    <UL>
                        {about.map((item, index) => (
                            <LI key={index}>{item.title}</LI>
                        ))}
                    </UL>
                </AboutBlock>
            </ProfileImage>
        </FadeIn>
    );
};

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
`;

const Name = styled.div`
    font-size: 36px;
    margin-top: 20px;
    margin-bottom: 10px;

    @media only screen and (max-width: 480px) {
        font-size: 26px;
    }
`;

const Position = styled.div`
    font-size: 30px;
    font-style: italic;

    @media only screen and (max-width: 480px) {
        font-size: 20px;
    }
`;

const AboutBlock = styled.div`
    margin-top: 50px;
`;

const UL = styled.ul``;

const LI = styled.li`
    margin-bottom: 10px;
`;

const HeaderText = styled.h1`
    font-style: italic;
`;

export default Profile;
