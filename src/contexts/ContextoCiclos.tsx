import { differenceInSeconds } from 'date-fns';
import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { CicloProps, CiclosReducer, tiposDeAcao } from '../reducers/ciclos';

interface CriarCicloProps {
  tarefa: string;
  tempo: number;
}

interface ContextoCiclo {
  ciclo: CicloProps[];
  novoCiclo: CicloProps | undefined;
  cicloIdAtivo: string | null;
  segundosPassados: number;
  marcarTerminoDoCiclo: () => void;
  setandoSegundos: (segundos: number) => void;
  criarNovoCiclo: (data: CriarCicloProps) => void;
  pararCicloAtivo: () => void;
}

interface ContextoCicloProviderProps {
  children: ReactNode;
}

export const ContextoCiclo = createContext({} as ContextoCiclo);

export function ContextoCicloProvider({
  children,
}: ContextoCicloProviderProps) {
  const [estadoCiclos, dispatch] = useReducer(
    CiclosReducer,
    {
      ciclo: [],
      cicloIdAtivo: null,
    },
    () => {
      const historicoDosEstadosJSON = localStorage.getItem(
        '@cronometro-rocket:ciclos-1.0.0',
      );

      if (historicoDosEstadosJSON) {
        return JSON.parse(historicoDosEstadosJSON);
      }
    },
  );

  const { ciclo, cicloIdAtivo } = estadoCiclos;
  const novoCiclo = ciclo.find((ciclo) => ciclo.id === cicloIdAtivo);

  const [segundosPassados, setSegundosPassados] = useState(() => {
    if (novoCiclo) {
      return differenceInSeconds(new Date(), new Date(novoCiclo.dataInicio));
    }

    return 0;
  });

  useEffect(() => {
    const stateJSON = JSON.stringify(estadoCiclos);

    localStorage.setItem('@cronometro-rocket:ciclos-1.0.0', stateJSON);
  }, [estadoCiclos]);

  function marcarTerminoDoCiclo() {
    dispatch({
      type: tiposDeAcao.MARCAR_TERMINO_CICLO_ATIVO,
      payload: {
        cicloIdAtivo,
      },
    });
  }

  function setandoSegundos(segundos: number) {
    setSegundosPassados(segundos);
  }

  function criarNovoCiclo(data: CriarCicloProps) {
    const id = String(new Date().getTime());

    const novoCiclo: CicloProps = {
      id,
      tarefa: data.tarefa,
      tempo: data.tempo,
      dataInicio: new Date(),
    };

    dispatch({
      type: tiposDeAcao.CRIAR_NOVO_CICLO,
      payload: {
        novoCiclo,
      },
    });
    setSegundosPassados(0);
  }

  function pararCicloAtivo() {
    dispatch({
      type: tiposDeAcao.INTERROMPER_CICLO_ATIVO,
      payload: {
        cicloIdAtivo,
      },
    });
  }

  return (
    <ContextoCiclo.Provider
      value={{
        ciclo,
        novoCiclo,
        cicloIdAtivo,
        marcarTerminoDoCiclo,
        segundosPassados,
        setandoSegundos,
        criarNovoCiclo,
        pararCicloAtivo,
      }}
    >
      {children}
    </ContextoCiclo.Provider>
  );
}
