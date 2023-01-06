import React, {useState} from 'react';
import Botao from "../Botao";
import style from './Form.module.scss'
import ITarefa from "../../types/tarefa";

import {v4 as uuidv4} from 'uuid';


interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<Array<ITarefa>>>
}


function Formulario({setTarefas}: Props) {
    const [descricao, setDescricao,] = useState("");
    const [tempo, setTempo] = useState("00:00");
    function adicionarTarefa(evento: React.FormEvent) {
        evento.preventDefault();
        setTarefas(
            tarefasAntigas =>
                [
                    ...tarefasAntigas,
                    {
                        descricao, tempo,
                        selecionado: false,
                        completado: false,
                        id: uuidv4(),

                    }
                ]
        );
        setDescricao("");
        setTempo("00:00");
    }


    return (
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que você quer estudar"
                    required
                    value={descricao}
                    onChange={e => setDescricao(e.target.value)}
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input
                    onChange={e => setTempo(e.target.value)}
                    type="time"
                    step="1"
                    name="tempo"
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    value={tempo}
                />
            </div>
            <Botao type='submit' children='Adicionar'/>
        </form>
    )
}
export default Formulario;