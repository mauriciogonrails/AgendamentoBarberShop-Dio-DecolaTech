package src.main.java.com.barbearia.repository;

    import src.main.java.com.barbearia.model.Agendamento;
    import org.springframework.data.jpa.repository.JpaRepository;
    import org.springframework.stereotype.Repository;

    @Repository
    public interface AgendamentoRepository extends JpaRepository<Agendamento, Long> {
    }
