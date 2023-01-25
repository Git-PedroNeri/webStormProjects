import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

createServer({
	models: {
		transaction: Model,
	},

	seeds(server) {
		server.db.loadData({
			transactions: [
				{
					id: 1,
					title: 'FreeLancer',
					amount: 2000,
					type: 'deposit',
					category: 'Dev',
					createdAt: new Date('2021-02-21'),
				},
				{
					id: 2,
					title: 'FreeLan',
					amount: 4000,
					type: 'withdraw',
					category: 'Ops',
					createdAt: new Date('2022-12-23'),
				},
			],
		});
	},

	routes() {
		this.namespace = 'api';
		this.get('/transactions', () => {
			return this.schema.all('transaction');
		});

		this.post('/transactions', (schema, request) => {
			const data = JSON.parse(request.requestBody);

			return schema.create('transaction', data);
		});
	},
});

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
