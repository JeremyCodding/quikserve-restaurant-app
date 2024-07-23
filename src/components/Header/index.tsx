import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import { Venue } from "../../redux/slices/types";

const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  text-align: center;
  padding: 0px;
  margin: 0px;
`;

const Logo = styled.img`
  max-width: 100%;
  height: auto;
  padding: 0px;
  margin: 0px;
`;

// const Title = styled.h1`
//   margin: 0;
//   font-size: 1.5rem;
// `;

const Header = ({ venueData }: { venueData: Venue }) => {
  // const venue = useSelector((state: RootState) => state.venue.data);
  const venue = venueData;

  return (
    <>
      {venue && (
        <HeaderContainer>
          <Logo src={venue.webSettings.bannerImage} alt="Restaurant Logo" />
          {/* <Title>{venue.name}</Title> */}
        </HeaderContainer>
      )}
    </>
  );
};

export default Header;
