import styled, { keyframes } from "styled-components";

const profileData = {
  image_url: "https://res.cloudinary.com/m4dev/image/upload/v1529938265/img_profile.jpg",
  name: "Nopparat Mueangkaew",
  position: "System Analyst",
  about: [
    {
      id: 3,
      title:
        "I am currently working at Yuanta Securities (Thailand) Company Limited as a System Analyst. My responsibilities include analyzing and designing systems, as well as managing timeline planning.",
    },
    {
      id: 2,
      title:
        "I have over 3 years of experience in the role of System Analyst Manager at Krungsri Consumer. My responsibilities include analyzing and designing systems to meet the needs of the credit card business, as well as managing outsourced resources for development projects to ensure they are completed on time according to the Waterfall methodology. Additionally, I am responsible for troubleshooting issues that arise with the system.",
    },
    {
      id: 1,
      title:
        "I have over 2 years of experience currently working at Yuanta Securities (Thailand) Company Limited as a System Analyst & Developer. My work involves development using programming languages such as C# and .NET Core 2.2, along with React, to support the securities business.",
    },
    {
      id: 0,
      title:
        "I have over 3 years of experience working as a Senior Software Developer and Team Lead within both the Backend and Frontend teams, as well as the Management Team, using agile methodology at 9Pi Company.",
    },
  ],
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Profile = () => {
  const { name, position, about } = profileData;

  return (
    <FadeIn>
      <ProfileWrap>
        <picture>
          {/* ถ้าคุณเก็บรูปไว้ใน public/img_profile.jpg ให้ใช้ src="/img_profile.jpg"
              ถ้าจะใช้ Cloudinary ตาม image_url ก็ใช้ profileData.image_url ได้เลย */}
          <img
            src={`${import.meta.env.BASE_URL}img_profile.jpg`}
            loading="eager"
            decoding="async"
            width="192"
            height="192"
            alt={`${name} profile photo`}
          />
        </picture>

        <Name>{name}</Name>
        <Position>{position}</Position>

        <AboutBlock aria-labelledby="about-title">
          <HeaderText id="about-title">About</HeaderText>
          <UL>
            {about.map((item) => (
              <LI key={item.id}>{item.title}</LI>
            ))}
          </UL>
        </AboutBlock>
      </ProfileWrap>
    </FadeIn>
  );
};

const FadeIn = styled.div`
  animation: ${fadeIn} 0.35s ease-out both;
`;

const ProfileWrap = styled.section`
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
    object-fit: cover;
  }
`;

const Name = styled.h1`
  font-size: 36px;
  margin: 20px 0 10px;

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

const Position = styled.p`
  font-size: 30px;
  font-style: italic;
  margin: 0;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const AboutBlock = styled.div`
  margin-top: 50px;
`;

const UL = styled.ul`
  margin: 0;
  padding-left: 1.2rem;
`;

const LI = styled.li`
  margin-bottom: 10px;
`;

const HeaderText = styled.h2`
  font-style: italic;
  margin: 0 0 12px 0;
`;

export default Profile;
