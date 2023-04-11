import { useContext } from 'react';
import { useFormContext } from 'react-hook-form';
import { ContextoCiclo } from '../../../contexts/ContextoCiclos';

import * as Styled from './Formulario.styles';

export function Formulario() {
  const { novoCiclo } = useContext(ContextoCiclo);
  const { register } = useFormContext();

  return (
    <Styled.FormContainer>
      <label htmlFor="tarefa">Vou trabalhar em</label>
      <Styled.InputText
        id="tarefa"
        placeholder="Dê um nome para o seu Projeto"
        list="tarefas-feitas"
        disabled={!!novoCiclo}
        required
        {...register('tarefa')}
      />

      <label htmlFor="tempo">durante</label>
      <Styled.InputNumber
        id="tempo"
        type="number"
        placeholder="00"
        step={5}
        min={5}
        max={60}
        {...register('tempo', { valueAsNumber: true })}
      />

      <span>minutos</span>
    </Styled.FormContainer>
  );
}
