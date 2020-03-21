(function() {
  "use strict";
  angular
    .module("hackaton-stefanini", [])
    .factory("HackatonStefaniniService", function() {
      var Pessoa = {};
      var listaPessoas = [
        {
          id: "1",
          nome: "Joana",
          email: "joana@gmail.com",
          dataNascimento: "16/02/2000",
          situacao: true
        },
        {
          id: "2",
          nome: "Maria",
          email: "maria@gmail.com",
          dataNascimento: "16/02/2000",
          situacao: true
        }
      ];

      Pessoa.todos = function() {
        return listaPessoas;
      };

      Pessoa.procurarPessoaPorId = function(id) {
        return listaPessoas.find(function(user) {
          return user.id === id;
        });
      };
      return Pessoa;
    });
})();
