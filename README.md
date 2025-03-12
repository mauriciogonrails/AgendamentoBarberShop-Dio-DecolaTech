# 💈 Sistema de Agendamento para Barbearia

![Java](https://img.shields.io/badge/Java-17-orange)
![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.0.0-green)
![Status](https://img.shields.io/badge/Status-Concluído-yellow)
![Licença](https://img.shields.io/badge/Licença-MIT-blue)

## 📋 Sobre o Projeto

Este sistema de agendamento para barbearias foi desenvolvido durante o programa DecolaTech para oferecer uma solução simples e eficiente para agendamento de serviços. A aplicação permite que clientes realizem agendamentos online, enquanto os barbeiros podem gerenciar sua agenda e serviços de forma intuitiva.

## ✂️ Funcionalidades

- **Agendamento de Horários**: Clientes podem marcar horários disponíveis
- **Gestão de Serviços**: Cadastro e gerenciamento de serviços oferecidos
- **Perfis de Barbeiros**: Cada profissional com sua própria agenda
- **Painel Administrativo**: Controle completo sobre agendamentos e serviços
- **Notificações**: Alertas de confirmação e lembretes de compromissos
- **Histórico de Atendimentos**: Registro de serviços realizados por cliente
- **Avaliações**: Sistema de feedback após atendimento

## 🛠️ Tecnologias Utilizadas

- **Backend**:
  - Java 17
  - Spring Boot 3
  - Spring Data JPA
  - Spring Security
  - Hibernate
  - Maven

- **Banco de Dados**:
  - MySQL
  - Flyway (Migrations)

- **Frontend** (planejado):
  - HTML5/CSS3
  - JavaScript
  - Bootstrap 5
  - Thymeleaf

## 📁 Estrutura do Projeto

```
AgendamentoBarbearia/
├── .idea/                        # Configurações do IntelliJ IDEA
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── barbearia/
│   │   │           ├── controller/       # Controladores REST
│   │   │           │   └── AgendamentoController.java
│   │   │           ├── model/           # Entidades JPA
│   │   │           │   └── Agendamento.java
│   │   │           ├── repository/      # Repositórios Spring Data
│   │   │           │   └── AgendamentoRepository.java
│   │   │           └── BarbeariaAgendamentoApplication.java
│   │   └── resources/
│   │       ├── static/          # Recursos estáticos (CSS, JS)
│   │       ├── templates/       # Templates Thymeleaf
│   │       └── application.properties
│   └── test/                    # Testes automatizados
├── .gitignore
├── pom.xml                      # Configurações Maven
└── README.md
```

## 📊 Modelo de Dados

O sistema é baseado nas seguintes entidades principais:

- **Cliente**: Informações pessoais e histórico de agendamentos
- **Barbeiro**: Perfil profissional, especialidades e agenda
- **Agendamento**: Registro de horário, serviço, cliente e barbeiro
- **Serviço**: Tipos de serviços oferecidos, preços e duração
- **Avaliação**: Feedback dos clientes após atendimento

## 🚀 Como Executar

### Pré-requisitos

- Java 17 ou superior
- Maven
- MySQL

### Configuração

1. Clone o repositório:
   ```bash
   git clone https://github.com/mauriciogonrails/AgendamentoBarbearia.git
   cd AgendamentoBarbearia
   ```

2. Configure o banco de dados no arquivo `application.properties`:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/barbearia
   spring.datasource.username=seu_usuario
   spring.datasource.password=sua_senha
   spring.jpa.hibernate.ddl-auto=update
   ```

3. Execute a aplicação:
   ```bash
   mvn spring-boot:run
   ```

4. Acesse a aplicação em `http://localhost:8080`

## 📝 Endpoints da API

| Método | URL | Descrição |
|--------|-----|-----------|
| GET    | /api/agendamentos | Lista todos os agendamentos |
| GET    | /api/agendamentos/{id} | Obtém um agendamento específico |
| POST   | /api/agendamentos | Cria um novo agendamento |
| PUT    | /api/agendamentos/{id} | Atualiza um agendamento existente |
| DELETE | /api/agendamentos/{id} | Cancela um agendamento |
| GET    | /api/barbeiros | Lista todos os barbeiros |
| GET    | /api/servicos | Lista todos os serviços disponíveis |

## 🧪 Testes

Para executar os testes automatizados:

```bash
mvn test
```

## 🔮 Funcionalidades Futuras

- Sistema de pagamento online
- Aplicativo móvel para clientes
- Integração com Google Calendar
- Programa de fidelidade para clientes
- Gestão de estoque de produtos

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`)
4. Faça push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

## 👥 Equipe

- [Mauricio Gonçalves](https://github.com/mauriciogonrails) - Desenvolvedor Full Stack

## 📞 Contato

Para dúvidas ou sugestões:
- GitHub: [mauriciogonrails](https://github.com/mauriciogonrails)

---

Desenvolvido com ✂️ e ☕ como parte do programa DecolaTech.
