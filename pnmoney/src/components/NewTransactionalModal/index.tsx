import Modal from 'react-modal';
import closeModal from '../../assets/Tipo=x-regular.svg';
import incomeImg from '../../assets/Tipo=arrow-circle-up-regular.svg';
import outcomeImg from '../../assets/Tipo=arrow-circle-down-regular.svg';
import { Container, RadioBox, TransactionalTypeContainer } from './styles';
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionalModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionalModal({
	isOpen,
	onRequestClose,
}: NewTransactionalModalProps) {
	const [title, setTitle] = useState('');
	const [value, setValue] = useState(0);
	const [category, setCategory] = useState('');

	const [type, setType] = useState('deposit');

	function handleCreateNewTransactional(event: FormEvent) {
		event.preventDefault();

		const data = { title, value, category };

		api.post('/transactions', data);
	}

	return (
		<Modal
			overlayClassName="react-modal-overlay"
			className="react-modal-content"
			onRequestClose={onRequestClose}
			isOpen={isOpen}
		>
			<button
				type="button"
				onClick={onRequestClose}
				className="react-modal-close"
			>
				<img src={closeModal} alt="Fechar" />
			</button>
			<Container onSubmit={handleCreateNewTransactional}>
				<h2>Cadastrar Transação</h2>
				<input
					value={title}
					onChange={(event) => setTitle(event.target.value)}
					placeholder="Título"
				/>

				<input
					onChange={(event) => setValue(Number(event.target.value))}
					value={value}
					type="number"
					placeholder="Valor"
				/>

				<TransactionalTypeContainer>
					<RadioBox
						isActive={type === 'deposit'}
						type="button"
						onClick={() => {
							setType('deposit');
						}}
						activeColor="green"
					>
						<img src={incomeImg} alt="Entrada" />
						<span>Entrada</span>
					</RadioBox>
					<RadioBox
						isActive={type === 'withdraw'}
						type="button"
						onClick={() => {
							setType('withdraw');
						}}
						activeColor="red"
					>
						<img src={outcomeImg} alt="Saída" />
						<span>Saída</span>
					</RadioBox>
				</TransactionalTypeContainer>

				<input
					value={category}
					onChange={(event) => setCategory(event.target.value)}
					type="text"
					placeholder="Categoria"
				/>

				<button type="submit">Cadastrar</button>
			</Container>
		</Modal>
	);
}
