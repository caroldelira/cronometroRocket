import { useContext } from 'react';
import { ContextoCiclo } from '../../contexts/ContextoCiclos';
import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import * as Styled from './Historico.styles';

export function Historico() {
  const { ciclo } = useContext(ContextoCiclo);

  return (
    <Styled.HisoricoContainer>
      <h1>Meu Histórico</h1>
      <Styled.TableContainer>
        <table>
          <thead>
            <th>Tarefa</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>
          <tbody>
            {ciclo.map((ciclo) => {
              return (
                <tr key={ciclo.id}>
                  <td>{ciclo.tarefa}</td>
                  <td>{ciclo.tempo} minutos</td>
                  <td>
                    {formatDistanceToNow(new Date(ciclo.dataInicio), {
                      addSuffix: true,
                      locale: ptBR,
                    })}
                  </td>
                  {ciclo.dataFinalizada && (
                    <td>
                      <Styled.Status statusCor="verde">Concluído</Styled.Status>
                    </td>
                  )}
                  {ciclo.dataInterrompida && (
                    <td>
                      <Styled.Status statusCor="vermelho">
                        Interrompido
                      </Styled.Status>
                    </td>
                  )}
                  {!ciclo.dataInterrompida && !ciclo.dataFinalizada && (
                    <td>
                      <Styled.Status statusCor="amarelo">
                        Em andamento
                      </Styled.Status>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Styled.TableContainer>
    </Styled.HisoricoContainer>
  );
}
