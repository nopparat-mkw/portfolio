import styled from "styled-components";
import SectionSeparator from "./SectionSeparator";

const navigators = [
  { title: "About", tabIndex: 0 },
  { title: "Skill", tabIndex: 1 },
  { title: "Work Experience", tabIndex: 2 },
  { title: "Education", tabIndex: 3 },
];

const Header = ({ changeTab }) => {
  return (
    <HeaderContainer>
      <Nav aria-label="Main navigation">
        {navigators.map((nav) => (
          <NavButton
            key={`${nav.tabIndex}-${nav.title}`}
            type="button"
            onClick={() => changeTab(nav.tabIndex)}
          >
            <TextSpan>{nav.title}</TextSpan>
          </NavButton>
        ))}
      </Nav>

      <SectionSeparator first />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  margin-top: 50px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavButton = styled.div`
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
