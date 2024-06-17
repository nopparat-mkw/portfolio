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
                const cachedData = await localForage.getItem('skill_data');
                if (cachedData) {
                    setData(cachedData);
                }

                const response = await axios.get('data/skill.json');
                const profileData = response.data;
                setData(profileData);
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
    align-items: start;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media only screen and (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const SkillColumn = styled.div`
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    width: 100%;
`;

const UL = styled.ul``;

const LI = styled.li`
    margin-bottom: 10px;
`;

const HeaderText = styled.h1`
    font-style: italic;
`;

export default Skill;
