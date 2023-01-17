import { Container } from './styles';
import incomeImg from '../../assets/Tipo=arrow-circle-up-regular.svg';
import outcomeImg from '../../assets/Tipo=arrow-circle-down-regular.svg';
import total from '../../assets/Tipo=currency-dollar-regular.svg';

export function Summary() {
	return (
		<Container>
			<div>
				<header>
					<p>Entradas</p>
					<img src={incomeImg} alt="Entradas" />
				</header>
				<strong>R$1000.00</strong>
			</div>
			<div>
				<header>
					<p>Saidas</p>
					<img src={outcomeImg} alt="Entradas" />
				</header>
				<strong>-R$1000.00</strong>
			</div>
			<div className="highlight-background">
				<header>
					<p>Total</p>
					<img src={total} alt="Entradas" />
				</header>
				<strong>R$1000.00</strong>
			</div>
		</Container>
	);
}
