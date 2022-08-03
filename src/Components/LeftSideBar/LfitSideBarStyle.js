import styled from "styled-components";

export const SideBarStyled = styled.section`
  padding: 1.5rem 2rem 1rem 2rem;
  background: var(--sideBarColor);
  min-height: 100%;
  .logo {
    margin-bottom: 2rem;
  }
`;

export const GroupStyled = styled.div`
  a {
    &.active {
      .btn-group {
        color: #373f51;
        font-style: normal;
        font-weight: 700;
        background: rgba(0, 88, 122, 0.05);
      }
    }
  }
  .btn-group {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    margin: 0.3rem 0;
    color: var(--gray);
    font-size: 18px;
    font-weight: 500;
    text-transform: capitalize;
    color: #8d8d8d;
  }
`;
