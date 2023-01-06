import ITarefa from "../../../types/tarefa";
import style from './Item.module.scss'


interface Props extends ITarefa {
    selecionaTarefa: (taskSelected: ITarefa) => void
}

export default function Item(
    {
        descricao,
        tempo,
        completado,
        selecionado,
        id,
        selecionaTarefa
    }: Props) {
    return (
        <li onClick={() => !completado && selecionaTarefa({descricao, tempo, selecionado, completado, id})}
            className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''} `}>
            <h3>{descricao}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>

    )
}

