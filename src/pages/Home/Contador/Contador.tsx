import { useContext, useEffect } from 'react';

import { differenceInSeconds } from 'date-fns';

import { ContextoCiclo } from '../../../contexts/ContextoCiclos';

import audioPlay from './../../../assets/som/Asteroid.mp3';

import * as Styled from './Contador.styles';

export function Contador() {
  const {
    novoCiclo,
    cicloIdAtivo,
    marcarTerminoDoCiclo,
    segundosPassados,
    setandoSegundos,
  } = useContext(ContextoCiclo);

  const totalDeSegundos = novoCiclo ? novoCiclo.tempo * 60 : 0;
  const segundosAtuais = novoCiclo ? totalDeSegundos - segundosPassados : 0;

  const calculoMinutos = Math.floor(segundosAtuais / 60); //arredonda o numero para baixo
  const calculoRestoSegundos = segundosAtuais % 60; // quantos segundos sobram após pegar o minuto completo

  const minutos = String(calculoMinutos).padStart(2, '0'); // o resultado da const minutos sempre terá 2 números, caso o resulta seja apenas um numero a função acrescentará um 0
  const segundos = String(calculoRestoSegundos).padStart(2, '0'); //padStart acrescenta na frente do numero

  const audio = new Audio(audioPlay);

  useEffect(() => {
    let intervalo: any;

    if (novoCiclo) {
      intervalo = setInterval(() => {
        const diferencaDeSegundos = differenceInSeconds(
          new Date(),
          new Date(novoCiclo.dataInicio),
        );

        if (diferencaDeSegundos >= totalDeSegundos) {
          audio.play();
          marcarTerminoDoCiclo();
          setandoSegundos(totalDeSegundos);
          clearInterval(intervalo);
        } else {
          setandoSegundos(diferencaDeSegundos);
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalo);
    };
  }, [novoCiclo, totalDeSegundos, cicloIdAtivo]);

  useEffect(() => {
    if (novoCiclo) {
      document.title = `${minutos}:${segundos}`;
    }
  }, [minutos, segundos, novoCiclo]);

  return (
    <Styled.TimeContainer>
      <span>{minutos[0]}</span>
      <span>{minutos[1]}</span>
      <Styled.Separator>:</Styled.Separator>
      <span>{segundos[0]}</span>
      <span>{segundos[1]}</span>
    </Styled.TimeContainer>
  );
}
