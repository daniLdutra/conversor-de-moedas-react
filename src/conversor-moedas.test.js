import ConversorMoedas from './conversor-moedas';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import axiosMock from './__mocks__/axios';

describe('Teste do componente de conversão de moedas', () => {
  test('deve renderizar o componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ConversorMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  test('deve simular uma conversão de moedas', async () => {
    const { findByTestId, getByTestId } = render(<ConversorMoedas />);
    // find suporta requisições assíncronas
    axiosMock.get.mockResolvedValueOnce({
      data: { success: true, rates: { BRL: 4.564292, USD: 1.101049 } },
    });
    fireEvent.click(getByTestId('btn-converter'));
    const modal = await findByTestId('modal');
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(modal).toHaveTextContent('Conversão×1 BRL = 0.24 USDNova conversão');
  });
});
