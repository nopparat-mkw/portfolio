import React, { useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import styled from 'styled-components';
import localForage from 'localforage';
import axios from 'axios';

const WorkExperience = () => {
    const [work, setWork] = useState([]);
    const [training, setTraining] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const workData = await fetchWorkExperience();
                const trainingData = await fetchTrainingExperience();
                setWork(workData);
                setTraining(trainingData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const fetchWorkExperience = async () => {
        // Attempt to fetch work experience data from localForage
        const cachedWork = await localForage.getItem('work_experience');
        if (cachedWork) {
            return cachedWork;
        } else {
            // If data is not cached, fetch it from the server
            const workResponse = await axios.get('data/work_experience.json');
            const workData = workResponse.data;
            // Store fetched work experience data in localForage
            await localForage.setItem('work_experience', workData);
            return workData;
        }
    };

    const fetchTrainingExperience = async () => {
        // Attempt to fetch training experience data from localForage
        const cachedTraining = await localForage.getItem('training_experience');
        if (cachedTraining) {
            return cachedTraining;
        } else {
            // If data is not cached, fetch it from the server
            const trainingResponse = await axios.get('data/training_experience.json');
            const trainingData = trainingResponse.data;
            // Store fetched training experience data in localForage
            await localForage.setItem('training_experience', trainingData);
            return trainingData;
        }
    };

    return (
        <FadeIn>
            <WorkExperienceContainer>
                <HeaderText>Work Experience</HeaderText>
                {work.map((item) => (
                    <div key={`experience--${item.id}`}>
                        <h3>{item.company}</h3>
                        <ul>
                            {item.positions.map((position) => (
                                <React.Fragment key={`position--${position.id}`}>
                                    <li>{position.position}</li>
                                    <ul>
                                        <li>{position.exp}</li>
                                    </ul>
                                </React.Fragment>
                            ))}
                        </ul>
                    </div>
                ))}

                <HeaderText>Employee Training Experience</HeaderText>
                <ul>
                    {training.map((item, index) => (
                        <li key={`training--${index}`}>{item}</li>
                    ))}
                </ul>
            </WorkExperienceContainer>
        </FadeIn>
    );
};

export const WorkExperienceContainer = styled.div``;

export const HeaderText = styled.h1`
    font-style: italic;
`;

export default WorkExperience;
