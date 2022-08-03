import styled from "styled-components";

export const NavBarStyled = styled.div`
  background: var(--lightColor);
  box-shadow: 0px 4px 4px rgba(103, 103, 103, 0.08);
  min-height: 99px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  overflow: hidden;

  .items {
    display: flex;
    align-items: center;
    .icon {
      font-size: 3rem;
      margin-right: 0.5rem;
    }
  }
  .userInfo {
    display: flex;
    align-items: center;
    svg {
      color: var(--darkColor);
    }
  }
`;
