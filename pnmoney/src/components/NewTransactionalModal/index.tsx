import Modal from 'react-modal';

interface NewTransactionalModal {
	isOpen: boolean;
	onRequestClose: () => void;
}

export function NewTransactionalModal({
	isOpen,
	onRequestClose,
}: NewTransactionalModal) {
	return (
		<Modal onRequestClose={onRequestClose} isOpen={isOpen}>
			<h2>Cadastrar Nova Transação</h2>
		</Modal>
	);
}
