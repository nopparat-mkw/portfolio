import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FadeIn from 'react-fade-in';
import localForage from 'localforage';
import axios from 'axios';

const Skill = () => {
    const [data, setData] = useState([]);

	useEffect(() => {
        const fetchData = async () => {
            try {
                // Attempt to fetch data from localForage
                const cachedData = await localForage.getItem('skill_data');
                if (cachedData) {
                    setData(cachedData);
                }

                // If data is not cached, fetch it from the server
                const response = await axios.get('data/skill.json');
                const profileData = response.data;
                setData(profileData);
                // Cache the fetched data for future use
                await localForage.setItem('skill_data', profileData);
                
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <FadeIn>
            <SkillContainer>
                <HeaderText>Skill</HeaderText>

                <SkillContent>
                    {data.map((item) => (
                        <SkillColumn key={`skill--${item.id}`}>
                            <h2>{item.title}</h2>
                            <UL>
                                {item.skills.map((skill, index) => (
                                    <LI key={`skill--item--${index}`}>{skill}</LI>
                                ))}
                            </UL>
                        </SkillColumn>
                    ))}
                </SkillContent>
            </SkillContainer>
        </FadeIn>
    );
};

const SkillContainer = styled.div``;
const SkillContent = styled.div`
    flex-direction: row;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    &:after {
        content: '';
        display: table;
        clear: both;
    }
`;
const SkillColumn = styled.div`
    box-sizing: border-box;
    float: left;
    width: 45%;
    padding: 10px;
    margin: 10px;
    height: 520px;

    @media only screen and (max-width: 480px) {
        width: 100%;
        margin: 0 0 10px 0;
        height: auto;
    }
`;

const UL = styled.ul``;
const LI = styled.li`
    margin-bottom: 10px;
`;
const HeaderText = styled.h1`
    font-style: italic;
`;

export default Skill;
