import React from 'react';
import styled from 'styled-components';
import SectionSeparator from './SectionSeparator';

const navigators = [
    { title: 'About', tabIndex: 0 },
    { title: 'Skill', tabIndex: 1 },
    { title: 'Work Experience', tabIndex: 2 },
    { title: 'Education', tabIndex: 3 },
];

const Header = ({ changeTab }) => (
    <HeaderContainer>
        <LinkNavigator>
            {navigators.map((nav) => (
                <LinkText
                    key={`${nav.tabIndex}--${nav.title}`}
                    onClick={() => changeTab(nav.tabIndex)}
                >
                    <TextSpan>{nav.title}</TextSpan>
                </LinkText>
            ))}
        </LinkNavigator>

        <SectionSeparator first />
    </HeaderContainer>
);

const HeaderContainer = styled.div`
    margin-top: 50px;
`;

const LinkNavigator = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-items: center;

    @media only screen and (max-width: 480px) {
        flex-direction: column;
        align-items: center;
    }
`;

const LinkText = styled.div`
    margin-left: 20px;
    margin-right: 20px;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        display: block;
        height: 2px;
        right: 0;
        bottom: 0;
        left: 0;
        background: #fff;
        opacity: 0;
        transition: 0.2s transform, 0.2s opacity;
        transform: scaleX(0.5);
    }
    &:hover::after {
        opacity: 1;
        transform: scaleX(1);
    }

    @media only screen and (max-width: 480px) {
        margin-bottom: 10px;
    }
`;

const TextSpan = styled.span`
    display: block;
    position: relative;
    transition: 0.2s transform;
    transform: translateY(0);
    letter-spacing: 5px;

    &:hover {
        transform: translateY(-5px);
    }
`;

export default Header;
