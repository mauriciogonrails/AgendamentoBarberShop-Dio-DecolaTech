class AgendamentoService {
    constructor() {
        this.baseUrl = '/agendamentos';
    }

    async listarAgendamentos() {
        const response = await fetch(this.baseUrl);
        return response.json();
    }

    async criarAgendamento(agendamento) {
        const response = await fetch(this.baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(agendamento)
        });
        return response.json();
    }
}