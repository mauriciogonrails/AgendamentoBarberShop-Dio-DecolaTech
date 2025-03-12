class AppComponent {
    constructor(agendamentoService) {
        this.agendamentoService = agendamentoService;
        this.agendamentos = [];
    }

    async ngOnInit() {
        this.agendamentos = await this.agendamentoService.listarAgendamentos();
        this.render();
    }

    render() {
        const listaAgendamentos = document.getElementById('lista-agendamentos');
        listaAgendamentos.innerHTML = '';
        this.agendamentos.forEach(agendamento => {
            const item = document.createElement('li');
            item.textContent = `${agendamento.nomeCliente} - ${agendamento.data}`;
            listaAgendamentos.appendChild(item);
        });
    }
}

const appComponent = new AppComponent(agendamentoService);
appComponent.ngOnInit();