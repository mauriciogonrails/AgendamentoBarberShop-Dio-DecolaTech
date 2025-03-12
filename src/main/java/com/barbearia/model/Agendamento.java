package com.barbearia.model;

    import javax.persistence.Entity;
    import javax.persistence.GeneratedValue;
    import javax.persistence.GenerationType;
    import javax.persistence.Id;
// entidade da classe agendamento
    @Entity
    public class Agendamento {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String nomeCliente;
        private String data;

        // Getters e setters
    }