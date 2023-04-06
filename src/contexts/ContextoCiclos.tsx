import { createContext, ReactNode, useState } from 'react';

interface CriarCicloProps {
  tarefa: string;
  tempo: number;
}

interface CicloProps {
  id: string;
  tarefa: string;
  tempo: number;
  dataInicio: Date;
  dataInterrompida?: Date;
  dataFinalizada?: Date;
}

interface ContextoCiclo {
  ciclo: CicloProps[];
  novoCiclo: CicloProps | undefined;
  cicloId: string | null;
  segundosPassados: number;
  marcarTerminoDoCiclo: () => void;
  setandoSegundos: (segundos: number) => void;
  criarNovoCiclo: (data: CriarCicloProps) => void;
  pararCicloAtivo: () => void;
}

export const ContextoCiclo = createContext({} as ContextoCiclo);

interface ContextoCicloProviderProps {
  children: ReactNode;
}

export function ContextoCicloProvider({
  children,
}: ContextoCicloProviderProps) {
  const [ciclo, setCiclo] = useState<CicloProps[]>([]);
  const [cicloId, setCicloId] = useState<string | null>(null);
  const [segundosPassados, setSegundosPassados] = useState(0);

  const novoCiclo = ciclo.find((ciclo) => ciclo.id === cicloId);

  function marcarTerminoDoCiclo() {
    setCiclo((estado) =>
      estado.map((valorCiclo) => {
        if (valorCiclo.id === cicloId) {
          return { ...valorCiclo, dataFinalizada: new Date() };
        } else {
          return valorCiclo;
        }
      }),
    );
  }

  function setandoSegundos(segundos: number) {
    setSegundosPassados(segundos);
  }

  function criarNovoCiclo(data: CriarCicloProps) {
    const id = String(new Date().getTime());

    const NovoCiclo: CicloProps = {
      id,
      tarefa: data.tarefa,
      tempo: data.tempo,
      dataInicio: new Date(),
    };

    setCiclo((tarefas) => [...tarefas, NovoCiclo]);
    setCicloId(id);
    setSegundosPassados(0);

    /* reset(); */
  }

  function pararCicloAtivo() {
    setCiclo((estado) =>
      estado.map((valorCiclo) => {
        if (valorCiclo.id === cicloId) {
          return { ...valorCiclo, dataInterrompida: new Date() };
        } else {
          return valorCiclo;
        }
      }),
    );
    setCicloId(null);
  }

  return (
    <ContextoCiclo.Provider
      value={{
        ciclo,
        novoCiclo,
        cicloId,
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
