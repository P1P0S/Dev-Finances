let Modal = {
	openClose() {
		document.querySelector(".modal-overlay").classList.toggle("active");
	},
};

const transactions = [
	{
		id: 1,
		description: "Website",
		amount: 500000,
		date: "23/01/2021",
	},
	{
		id: 2,
		description: "Luz",
		amount: -50000,
		date: "23/01/2021",
	},
	{
		id: 3,
		description: "Internet",
		amount: -20000,
		date: "23/01/2021",
	},
	{
		id: 4,
		description: "App",
		amount: 500000,
		date: "30/01/2021",
	},
];

const Transaction = {
	incomes() {},
	expenses() {},
	total() {},
};

const DOM = {
	transactionsContainer: document.querySelector("#data-table tbody"),

	addTransaction(transaction, index) {
		const tr = document.createElement("tr");
		tr.innerHTML = DOM.innerHTMLTransaction(transaction);
		DOM.transactionsContainer.appendChild(tr);
	},

	innerHTMLTransaction(transaction) {
		const CSSclass = transaction.amount > 0 ? "income" : "expense";

		const amount = Utils.formatCurrency(transaction.amount);

		const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img
            src="./assets/minus.svg"
            alt="Remover Transação"
            />
        </td>
        `;
		return html;
	},
};

const Utils = {
	formatCurrency(value) {
		const signal = Number(value) < 0 ? "-" : "";
	},
};

transactions.forEach((transaction) => {
	DOM.addTransaction(transaction);
});
