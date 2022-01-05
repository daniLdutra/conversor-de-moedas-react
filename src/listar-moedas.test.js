import React from 'react';
import ReactDom from 'react-dom';
import ListarMoedas from './listar-moedas';

describe('Teste do componente de listagem de moedas', () => {
  it('deve redenrizar componente sem erros', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListarMoedas />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
