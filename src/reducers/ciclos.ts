

export interface CicloProps {
  id: string;
  tarefa: string;
  tempo: number;
  dataInicio: Date;
  dataInterrompida?: Date;
  dataFinalizada?: Date;
}

interface EstadoDeCiclos {
  ciclo: CicloProps[];
  cicloIdAtivo: string | null;
}

export enum tiposDeAcao {
  CRIAR_NOVO_CICLO = 'CRIAR_NOVO_CICLO',
  INTERROMPER_CICLO_ATIVO = 'INTERROMPER_CICLO_ATIVO',
  MARCAR_TERMINO_CICLO_ATIVO = 'MARCAR_TERMINO_CICLO_ATIVO',
}

export function CiclosReducer(state: EstadoDeCiclos, action: any) {

    switch (action.type) {
      case tiposDeAcao.CRIAR_NOVO_CICLO:
        return {
          ...state,
          ciclo: [...state.ciclo, action.payload.novoCiclo],
          cicloIdAtivo: action.payload.novoCiclo.id,
        };
      case tiposDeAcao.INTERROMPER_CICLO_ATIVO:
        return {
          ...state,
          ciclo: state.ciclo.map((valorCiclo) => {
            if (valorCiclo.id === state.cicloIdAtivo) {
              return { ...valorCiclo, dataInterrompida: new Date() };
            } else {
              return valorCiclo;
            }
          }),
          cicloIdAtivo: null,
        };
      case tiposDeAcao.MARCAR_TERMINO_CICLO_ATIVO:
        return {
          ...state,
          ciclo: state.ciclo.map((valorCiclo) => {
            if (valorCiclo.id === state.cicloIdAtivo) {
              return { ...valorCiclo, dataFinalizada: new Date() };
            } else {
              return valorCiclo;
            }
          }),
          cicloIdAtivo: null,
        };
      default:
        return state;
    }
  }
