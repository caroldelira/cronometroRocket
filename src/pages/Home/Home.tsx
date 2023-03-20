import { Play } from 'phosphor-react'
import { Button } from '../../components/Button/Button'

import * as Styled from './Home.styles'

export function Home() {
  return (
    <Styled.HomeContainer>
      <form action="">
        <Styled.FormContainer>
          <label htmlFor="tarefas">Vou trabalhar em</label>
          <Styled.InputText
            id="tarefas"
            placeholder="Dê um nome para o seu Projeto"
            list="tarefas-feitas"
          />

          <datalist id="tarefas-feitas">
            <option value="Projeto 1" />
            <option value="Projeto 2" />
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
          label="Começar"
          icon={<Play size={24} />}
          disabled
        />
      </form>
    </Styled.HomeContainer>
  )
}
