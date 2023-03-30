import { Play } from 'phosphor-react';
import { Button } from '../../components/Button/Button';
import { useForm } from 'react-hook-form';

import * as Styled from './Home.styles';
import { useState } from 'react';

interface FormProps {
  tarefa: string;
  tempo: number;
}

interface CicloProps {
  id: string;
  tarefa: string;
  tempo: number;
}

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      tarefa: '',
      tempo: 0,
    },
  });

  const [ciclo, setCiclo] = useState<CicloProps[]>([]);
  const [cicloId, setCicloId] = useState<string | null>(null);

  function handleCreateCycle(data: FormProps) {
    const id = String(new Date().getTime());

    const NovoCiclo: CicloProps = {
      id,
      tarefa: data.tarefa,
      tempo: data.tempo,
    };

    setCiclo((tarefas) => [...tarefas, NovoCiclo]);
    setCicloId(id);

    reset();
  }

  const novoCiclo = ciclo.find((ciclo) => ciclo.id === cicloId);

  console.log(novoCiclo);

  const tarefa = watch('tarefa');
  const desabilitaBotao = !tarefa;

  return (
    <Styled.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateCycle)} action="">
        <Styled.FormContainer>
          <label htmlFor="tarefa">Vou trabalhar em</label>
          <Styled.InputText
            id="tarefa"
            placeholder="Dê um nome para o seu Projeto"
            list="tarefas-feitas"
            {...register('tarefa')}
          />

          <datalist id="tarefas-feitas">
            <option value="Projeto 1" />
            <option value="Projeto 2" />z
            <option value="Projeto 3" />
            <option value="Projeto 4" />
          </datalist>

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

        <Styled.TimeContainer>
          <span>0</span>
          <span>0</span>
          <Styled.Separator>:</Styled.Separator>
          <span>0</span>
          <span>0</span>
        </Styled.TimeContainer>

        <Button
          type="submit"
          disabled={desabilitaBotao}
          label="Começar"
          icon={<Play size={24} />}
        />
      </form>
    </Styled.HomeContainer>
  );
}
