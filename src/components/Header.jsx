import styled from "styled-components";
import SectionSeparator from "./SectionSeparator";

const navigators = [
  { title: "About", tabIndex: 0 },
  { title: "Skill", tabIndex: 1 },
  { title: "Work Experience", tabIndex: 2 },
  { title: "Education", tabIndex: 3 },
];

const Header = ({ activeTab, changeTab }) => {
  return (
    <HeaderContainer>
      <Nav aria-label="Main navigation">
        {navigators.map((nav) => (
          <NavButton
            key={`${nav.tabIndex}-${nav.title}`}
            role="button"
            tabIndex={0}
            $active={activeTab === nav.tabIndex}
            aria-current={activeTab === nav.tabIndex ? "page" : undefined}
            onClick={() => changeTab(nav.tabIndex)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                changeTab(nav.tabIndex);
              }
            }}
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
  margin-top: 10px;
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
  margin: 0 18px;
  cursor: pointer;

  color: #fff;
  font-size: 1.05rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;

  display: inline-block;
  position: relative;
  user-select: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -2px;
    height: 2px;
    background: #fff;

    opacity: ${({ $active }) => ($active ? 1 : 0)};
    transform: ${({ $active }) => ($active ? "scaleX(1)" : "scaleX(0.5)")};
    transition: 0.2s transform, 0.2s opacity;
  }

  &:hover::after {
    opacity: 1;
    transform: scaleX(1);
  }

  &:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 6px;
    border-radius: 6px;
  }

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

const TextSpan = styled.span`
  display: inline-block;
  transition: transform 0.2s ease;

  ${NavButton}:hover & {
    transform: translateY(-5px);
  }
`;

export default Header;
