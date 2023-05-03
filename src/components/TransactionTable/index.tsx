import categoryArrow from '../../assets/categoriesArrow.svg';
import { Container } from './styles';

// Function to turn img 180 when button clicks
function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
  e.currentTarget.classList.toggle('rotate');
}

export function TransactionTable() {
  return (
    <>
      <Container>
        <h2>RECENT TRANSACTIONS</h2>
        <main className='table'>
          <section className='table-header'>
            <div className='flex-group'>
              <h2 className='active'>Deposits</h2>
              <h2>Withdraws</h2>
            </div>
          </section>
          <section className='table-body'>
            <table className='content-table'>
              <thead>
                <tr>
                  <th>
                    Name{' '}
                    <button onClick={handleClick}>
                      <img
                        src={categoryArrow}
                        alt=''
                        className='catArrow'
                      />
                    </button>{' '}
                  </th>
                  <th>
                    Status{' '}
                    <button onClick={handleClick}>
                      <img
                        src={categoryArrow}
                        alt=''
                        className='catArrow'
                      />
                    </button>
                  </th>
                  <th>
                    Value{' '}
                    <button onClick={handleClick}>
                      <img
                        src={categoryArrow}
                        alt=''
                        className='catArrow'
                      />
                    </button>
                  </th>
                  <th>
                    Category{' '}
                    <button onClick={handleClick}>
                      <img
                        src={categoryArrow}
                        alt=''
                        className='catArrow'
                      />
                    </button>
                  </th>
                  <th>
                    Transaction Date{' '}
                    <button onClick={handleClick}>
                      <img
                        src={categoryArrow}
                        alt=''
                        className='catArrow'
                      />
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Desenvolvimento de Site</td>
                  <td>Completed</td>
                  <td>$1.000,00</td>
                  <td>Development</td>
                  <td>10/09/2021</td>
                </tr>
                <tr>
                  <td>Desenvolvimento de Site</td>
                  <td>Completed</td>
                  <td>$1.000,00</td>
                  <td>Development</td>
                  <td>10/09/2021</td>
                </tr>
              </tbody>
            </table>
          </section>
        </main>
      </Container>
    </>
  );
}
