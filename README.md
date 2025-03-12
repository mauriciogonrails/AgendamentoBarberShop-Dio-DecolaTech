# Agendamento de uma barbearia

Este é o projeto 4 do bootcamp da DIO x Avanade, um simples agendamento de barbearia desenvolvido com Spring Boot no backend e uma simulação básica do Angular no frontend.

## Funcionalidades

* Listar agendamentos existentes.
* Criar novos agendamentos (funcionalidade básica, sem formulário completo).

## Tecnologias

* **Backend:**
    * Java 11+
    * Spring Boot
    * Spring Data JPA
    * H2 Database (em memória)
* **Frontend:**
    * HTML
    * JavaScript (simulando a estrutura do Angular)
    * CSS (estilos básicos)

## Como Executar

1.  Clone o repositório:

    ```bash
    git clone [https://github.com/demianscult/agendamento-barbearia.git](https://github.com/demianscult/agendamento-barbearia.git)
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd agendamento-barbearia
    ```

3.  Execute a aplicação Spring Boot:

    * **Usando Maven:**

        ```bash
        ./mvnw spring-boot:run
        ```

    * **Usando sua IDE (IntelliJ IDEA, Eclipse, etc.):**
        * Abra o projeto na IDE.
        * Execute a classe `BarbeariaAgendamentoApplication.java`.

4.  Abra o navegador e acesse `http://localhost:8080/`.

## Estrutura do Frontend (Angular Simulado)

O frontend simula a estrutura básica do Angular, utilizando arquivos JavaScript para componentes, serviços e modelos. Os arquivos estão localizados na pasta `src/main/resources/static/app`.

* `agendamento.model.js`: Define a classe `Agendamento`.
* `agendamento.service.js`: Define o serviço `AgendamentoService` para comunicação com o backend.
* `app.module.js`: Inicializa o serviço `AgendamentoService`.
* `app.component.js`: Define o componente principal `AppComponent` e sua lógica.
* `app.component.html`: Define o template HTML do componente principal.
* `app.component.css`: Define os estilos CSS do componente principal.

## Observações

* Este é um projeto básico para fins de demonstração.
* O banco de dados H2 é em memória, então os dados serão perdidos ao reiniciar a aplicação.
* O frontend simula a estrutura do Angular, mas não é um Angular completo.
* Os estilos CSS são básicos e podem ser melhorados.
* Para um aplicativo completo, seria necessário adicionar mais funcionalidades, como:
    * Formulários para criar agendamentos.
    * Validações e tratamento de erros.
    * Um banco de dados persistente (ex: MySQL, PostgreSQL).
    * Um frontend Angular completo utilizando o Angular CLI.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está sob a licença [MIT](LICENSE).
