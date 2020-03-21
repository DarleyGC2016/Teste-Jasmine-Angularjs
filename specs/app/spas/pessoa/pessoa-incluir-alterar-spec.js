(function() {
  "use strict";
  angular
    .module("hackaton-stefanini", [])
    .factory("HackatonStefaniniService", function() {
      var Pessoa = {};
      var listaPessoas = [
        {
          id: 1,
          nome: "Joana",
          email: "joana@gmail.com",
          dataNascimento: "16/02/2000",
          enderecos: [
            {
              id: 1,
              idPessoa: 1,
              cep: "22.222-222",
              uf: "df",
              localidade: "Brasilia",
              bairro: "Tag.Norte",
              logradouro: "QNM",
              complemento: "Casa 02"
            }
          ],
          perfils: [
            {
              id: 1,
              nome: "Admin",
              descricao: "Admininstradora"
            }
          ],
          situacao: true
        }
      ];
      Pessoa.todos = function() {
        return listaPessoas;
      };
      return Pessoa;
    });
})();
