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
];

const Transaction = {
    incomes() {},
    expenses() {},
    total() {},
};
