import logoImg from '../../assets/logo.svg';
import profileIcon from '../../assets/profile.svg';
import settingsIcon from '../../assets/settings.svg';
import { Container, Content } from './styles';

const openModal = () => {
  const modalEl = document.querySelector('.modal-background');
  modalEl?.classList.remove('hidden');
};

export function Header() {
  return (
    <Container>
      <Content>
        <div className='flex-group'>
          <a href=''>
            <img
              src={logoImg}
              alt=''
            />
          </a>
          <h1>Piggy.io</h1>
        </div>
        <div className='flex-group'>
          <button
            onClick={openModal}
            className='new-transaction'>
            New Transaction
          </button>
          <a
            className='links'
            href=''>
            <img
              src={profileIcon}
              alt=''
            />{' '}
          </a>
          <a
            className='links'
            href=''>
            <img
              src={settingsIcon}
              alt=''
            />{' '}
          </a>
        </div>
      </Content>
      <hr />
    </Container>
  );
}
