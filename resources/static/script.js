fetch('/agendamentos')
        .then(response => response.json())
        .then(agendamentos => {
            const listaAgendamentos = document.getElementById('lista-agendamentos');
            agendamentos.forEach(agendamento => {
                const item = document.createElement('li');
                item.textContent = agendamento.nomeCliente + ' - ' + agendamento.data;
                listaAgendamentos.appendChild(item);
            });
        });