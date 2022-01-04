import { screen } from '@testing-library/react';
import ConversorMoedas from './conversor-moedas';

test('deve redenrizar o componente sem erros', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ConversorMoedas />, div);
  ReactDOM.unmountComponentAtNode(div);
});
