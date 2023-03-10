import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { useState } from 'react';
import { NewTransactionalModal } from './components/NewTransactionalModal';
import { TransactionsProvider } from './Hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
	const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
		useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewTransactionModalOpen(true);
	}

	function handleCloseTransactionModal() {
		setIsNewTransactionModalOpen(false);
	}

	return (
		<TransactionsProvider>
			<Header onOpenNewTransactionalModal={handleOpenNewTransactionModal} />

			<Dashboard />

			<NewTransactionalModal
				isOpen={isNewTransactionModalOpen}
				onRequestClose={handleCloseTransactionModal}
			/>

			<GlobalStyle />
		</TransactionsProvider>
	);
}
