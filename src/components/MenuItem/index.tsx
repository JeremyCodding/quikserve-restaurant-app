import React from "react";
import styled from "styled-components";
import { MenuItem as IMenuItem } from "../../redux/slices/types.ts";

const MenuItemContainer = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
`;

const ItemImage = styled.img`
  width: 100%;
  height: 200px; /* Adjust height as needed */
  object-fit: cover;
  border-bottom: 1px solid #ddd;
`;

const ItemDetails = styled.div`
  padding: 10px 0;

  h3 {
    margin: 0 0 5px;
  }

  p {
    margin: 0 0 10px;
    font-size: 14px;
  }
`;

// const AddButton = styled.button`
//   background-color: ${({ theme }) => theme.colors.primary};
//   color: white;
//   padding: 8px 15px;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
// `;

const MenuItem: React.FC<{ item: IMenuItem }> = ({ item }) => {
  // ... (add to basket logic, including modifier handling if needed)

  return (
    <MenuItemContainer>
      <ItemImage src={item.images[0]?.image} alt={item.name} />
      <ItemDetails>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <span>
          {item.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        {/* ... add to basket button or modifier selection here ... */}
      </ItemDetails>
    </MenuItemContainer>
  );
};

export default MenuItem;
