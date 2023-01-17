import { Container, Content } from './styles';
import logoImg from '../../assets/logo.svg';
import { useState } from 'react';

import Modal from 'react-modal';


interface HeaderProps{
	onOpenNewTransactionalModal:()=>void;
}

export function Header({onOpenNewTransactionalModal}:HeaderProps) {


	return (
		<Container>
			<Content>
				<img src={logoImg} alt="pn money" />
				<button type="button" onClick={onOpenNewTransactionalModal}>
					Nova Transação
				</button>
				
			</Content>
		</Container>
	);
}
