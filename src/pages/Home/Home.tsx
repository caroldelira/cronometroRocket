import { FormProvider, useForm } from 'react-hook-form';

import { ButtonLed, ButtonPink } from 'designsystem-marianasilva';

import { Formulario } from './Formulario';
import { Contador } from './Contador';

import { useContext } from 'react';
import { ContextoCiclo } from '../../contexts/ContextoCiclos';

import * as Styled from './Home.styles';

interface CriarCicloProps {
  tarefa: string;
  tempo: number;
}

export function Home() {
  const { novoCiclo, criarNovoCiclo, pararCicloAtivo } =
    useContext(ContextoCiclo);

  const novoCicloForm = useForm<CriarCicloProps>({
    defaultValues: {
      tarefa: '',
      tempo: 0,
    },
  });

  const { handleSubmit, reset } = novoCicloForm;

  function chamarCicloInterrompido() {
    pararCicloAtivo();
    reset();
    document.title = 'Pomodoro';
  }

  return (
    <Styled.HomeContainer>
      <form onSubmit={handleSubmit(criarNovoCiclo)} action="">
        <FormProvider {...novoCicloForm}>
          <Formulario />
        </FormProvider>
        <Contador />

        <Styled.ContentButton>
          {novoCiclo ? (
            <ButtonPink
              label="Interromper"
              size="large"
              variant="solid"
              onClick={chamarCicloInterrompido}
            />
          ) : (
            <ButtonLed label="Começar" size="large" />
          )}
        </Styled.ContentButton>
      </form>
    </Styled.HomeContainer>
  );
}
