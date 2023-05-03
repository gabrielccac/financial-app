import { DataBox } from '../NumbersBoxes';
import { Container } from './styles';

import arrowDown from '../../assets/arrowDown.svg';
import arrowUp from '../../assets/arrowUp.svg';
import coins from '../../assets/coins.svg';
import bag from '../../assets/bag.svg';


export function Summary() {
  return (
    <>
      <Container>
        <h2>SUMMARY</h2>
        <div className='grid-flow'>
          <DataBox icon={arrowDown} title='Deposits' value='38.850,19' />
          <DataBox icon={arrowUp} title='Withdraws' value='12.426,02' />
          <DataBox icon={coins} title='Avg. Deposits' value='1.380,12' />
          <DataBox icon={bag} title='Avg. Withdraws' value='2.270,78' />
        </div>
      </Container>
    </>
  );
}
