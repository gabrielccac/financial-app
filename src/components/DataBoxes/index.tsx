interface DataBoxProps {
  icon: string;
  title: string;
  value: string;
}

import { Container } from './styles';

export function DataBox({icon, title, value}: DataBoxProps ) {
  return (
    <>
      <Container >
        <img src={icon} alt="" />
        <div className='flex-group'>
          <h2>{title}</h2>
          <div className='flex'>
          <span className='dollar-sign'>R$</span>
          <span>{value}</span>
          </div>
        </div>
      </Container>
    </>
  );
}
