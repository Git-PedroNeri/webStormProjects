import React, {useState} from 'react';
import Formulario from "../components/Form";
import Lista from "../components/List";
import style from './App.module.scss'
import Cronometro from "../components/Cronometro";
import ITarefa from "../types/tarefa";


function App() {

    const [tarefas, setTarefas] = useState<Array<ITarefa> | []>([]);
    const [selecionado, setSelecionado] = useState<ITarefa>();


    function selecionaTarefa(taskSelected: ITarefa) {
        setSelecionado(taskSelected);
        setTarefas(tasksAnteriores => tasksAnteriores.map(t => ({
            ...t,
            selecionado: t.id === taskSelected.id ? true : false
        })))
    }

    function finalizarTarefa() {
        if (selecionado) {
            setSelecionado(undefined);
            setTarefas(tasksAnteriores => tasksAnteriores.map(t => {
                if (t.id === selecionado.id) {
                    return {
                        ...t, selecionado: false,
                        completado: true
                    }
                }
                return t
            }))
        }
    }

    return (
        <div className={style.AppStyle}>
            <Formulario setTarefas={setTarefas}/>
            <Lista
                tasks={tarefas}
                selecionaTarefa={selecionaTarefa}

            />
            <Cronometro
                finalizarTarefa={finalizarTarefa}
                selecionado={selecionado}/>
        </div>
    );
}

export default App;
