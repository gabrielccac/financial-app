import logoImg from "../../assets/logo.svg";
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <div className="flex-group">
          <img src={logoImg} alt="" />
          <h1>Piggy.io</h1>
        </div>
        <div className="flex-group">
          <button >New Transaction</button>
        </div>
      </Content>
      <hr />
    </Container>
  );
}
