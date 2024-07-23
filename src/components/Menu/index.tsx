import { useState } from "react";
import styled from "styled-components";
// import { useSelector } from "react-redux";
// import { RootState } from "../../redux/store";
import MenuItem from "../MenuItem";
import { Menu as IMenu } from "../../redux/slices/types";

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  max-width: 1440px;
  gap: 20px;
  padding: 20px;
`;

const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  max-width: 1440px;
  box-shadow: 3px 3px 10px #cdbfbf;
  border-radius: 8px;
`;

const MenuSections = styled.div`
  display: flex;
  margin: 32px;
  gap: 16px;
`;

const SectionButton = styled.button<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
  border: none;
  cursor: pointer;
  text-align: left;

  img {
    border: ${({ active }) => (active ? "3px" : "none")} solid
      ${({ active, theme }) => (active ? theme.colors.primary : "transparent")};
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
`;

const MenuItems = styled.div`
  flex: 1;
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(250px, 1fr)
  ); /* Responsive columns */
  gap: 20px;
`;
const Menu = ({ menuData }: { menuData: IMenu }) => {
  // const menu = useSelector((state: RootState) => state.menu.data);
  const menu = menuData;
  const [activeSection, setActiveSection] = useState(0);

  // ... (functions for handling section clicks and active state)

  return (
    <OptionsContainer>
      <MenuContainer>
        <MenuSections>
          {menu?.sections.map((section, index) => (
            <SectionButton
              key={section.id}
              active={index === activeSection}
              onClick={() => setActiveSection(index)}
            >
              <img src={section.images[0].image} alt="section picture" />
              {section.name}
            </SectionButton>
          ))}
        </MenuSections>
        <MenuItems>
          {menu?.sections[activeSection]?.items.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </MenuItems>
      </MenuContainer>
    </OptionsContainer>
  );
};

export default Menu;
