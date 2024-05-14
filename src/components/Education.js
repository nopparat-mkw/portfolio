import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import localForage from 'localforage';
import axios from 'axios';

const Education = () => {
    const [data, setData] = useState([]);

	useEffect(() => {
        const fetchData = async () => {
            try {
                // Attempt to fetch data from localForage
                const cachedData = await localForage.getItem('education_data');
                if (cachedData) {
                    setData(cachedData);
                }
                
				// If data is not cached, fetch it from the server
                const response = await axios.get('data/education.json');
                const profileData = response.data;
                setData(profileData);
                // Cache the fetched data for future use
                await localForage.setItem('education_data', profileData);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <FadeIn>
            <EducationContainer>
                <HeaderText>Education</HeaderText>
                {data.map((item) => (
                    <EducationBlock key={`university--${item.university}`}>
                        <EducationName>{`- ${item.major}`}</EducationName>
                        <EducationYear>
                            <ul>
                                <li>{`${item.university} @ ${item.year}`}</li>
                            </ul>
                        </EducationYear>
                    </EducationBlock>
                ))}
            </EducationContainer>
        </FadeIn>
    );
};

export const EducationContainer = styled.div``;
export const EducationBlock = styled.div`
    margin-bottom: 30px;
`;
export const EducationName = styled.div``;
export const EducationYear = styled.div``;
export const HeaderText = styled.h1`
    font-style: italic;
`;

export default Education;
