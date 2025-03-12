package src.main.java.com.barbearia.controller;

    import src.main.java.com.barbearia.model.Agendamento;
    import src.main.java.com.barbearia.repository.AgendamentoRepository;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;

    @RestController
    @RequestMapping("/agendamentos")
    public class AgendamentoController {

        @Autowired
        private AgendamentoRepository agendamentoRepository;

        @GetMapping
        public List<Agendamento> listarAgendamentos() {
            return agendamentoRepository.findAll();
        }

        @PostMapping
        public Agendamento criarAgendamento(@RequestBody Agendamento agendamento) {
            return agendamentoRepository.save(agendamento);
        }
    }
