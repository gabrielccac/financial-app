import styled from 'styled-components';

export const Container = styled.tr`
  span {
    padding: .375rem;
    border-radius: .375rem;
  }

  .Completed {
    color: #314C3C;
    background-color: #D3F9D8;
  }

  .Pending {
    color: #513C06;
    background-color: #FBF0DB;
  }

  .Failed {
    color: #842029;
    background-color: #F8D7DA;
  }
`;