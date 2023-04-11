import styled from 'styled-components';

export const HisoricoContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h1 {
    color: ${(props) => props.theme['pink-300']};
  }
`

export const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 50px;
  width: 100%;
  
  table {
    width: 100%;
    height: 200px;
    border-collapse: collapse;
    color:${(props) => props.theme['gray-200']};
    
    min-width: 400px; // forçar para gerar o scroll na tabela quando tiver no mobile.
    

    thead {
      background: ${(props) => props.theme['blue-300']};
      color: white;
      text-align: left; 
    }

    th {
      line-height: 50px;

      &:first-child {
        border-top-left-radius: 10px;
        padding-left: 20px;
      }
      &:last-child {
        border-top-right-radius: 10px;
      }
    }

    tr {
      text-align: left;
    }

    td {
      line-height: 40px;
      background: ${(props) => props.theme['gray-700']};
      border-top: 3px solid ${(props) => props.theme['gray-800']};

      &:first-child {
        width: 50%;
        padding-left: 20px;
      }
    }
  }
`;

const STATUS_COR = {
  amarelo: 'yellow-500',
  vermelho: 'pink-300',
  verde: 'blue-100',
} as const //as const serve para informar qual o valor da string passada para que o thema consiga pegar a cor exata

interface StatusProps {
  statusCor: keyof typeof STATUS_COR; /* 'vermelho' | 'verde' | 'amarelo'; ao inver de colocar os nomes das cores eu passo as chaves do objeto STATUS COR assim tudo que acrescentar lá será incluido na tipagem*/ 
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 999px;
    background: ${(props) => props.theme[STATUS_COR[props.statusCor]]};
  }

`;
