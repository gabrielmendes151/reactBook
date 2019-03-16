import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

export const PostHeader = styled.div`
  width: 700px;
  background: #fff;
  border-radius: 3px;
  display: flex;
  flex-direction: column;

  header{
    padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: left;

  img {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    object-fit: cover;
    float: left;
  }
  div{
    .smallNome{
      font-size: 14px;
      margin-left: 7px;
      color: #666;

    }
    .smallTempo{
      font-size: 10px;
      margin-left: 9px;
      color: #666;
    }
    p{
      color: #666;
    }
  }
  }
`;
