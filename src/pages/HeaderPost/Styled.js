import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const Post = styled.div`
  width: 700px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;

  img {
    width: 60px;
    border-radius: 100%;
    object-fit: cover;
  }
`;
