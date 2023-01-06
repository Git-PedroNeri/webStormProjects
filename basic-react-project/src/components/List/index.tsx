import style from './List.module.scss'
import Item from "./Item";
import ITarefa from "../../types/tarefa";


interface Props {
    tasks: ITarefa[],
    selecionaTarefa: (taskSelected: ITarefa) => void
}

function Lista({tasks, selecionaTarefa}: Props) {


    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((tarefa) => (
                    /*
                                            <Item key ={index} descricao={tarefa.descricao} tempo={tarefa.tempo}/>
                    */
                    <Item selecionaTarefa={selecionaTarefa} key={tarefa.id} {...tarefa}/>
                ))}

            </ul>

        </aside>
    )
}

export default Lista;