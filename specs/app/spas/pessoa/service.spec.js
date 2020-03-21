describe("Conjunto de testes - Hudson", function() {
  var ServiceTeste;
  var unicaPessoa = {
    id: "1",
    nome: "Joana",
    email: "joana@gmail.com",
    dataNascimento: "16/02/2000",
    situacao: true
  };
  var listaPessoasTeste = [
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

  beforeEach(angular.mock.module("hackaton-stefanini"));

  beforeEach(inject(function(HackatonStefaniniService) {
    ServiceTeste = HackatonStefaniniService;
  }));

  it("A service existe?", function() {
    expect(ServiceTeste).toBeDefined();
  });
  describe(".todos()", function() {
    it("Metodo existe?", function() {
      expect(ServiceTeste.todos).toBeDefined();
    });

    it("Deveria retornar uma lista hard code de contatos", function() {
      expect(ServiceTeste.todos()).toEqual(listaPessoasTeste);
    });
  });

  describe(".procurarPessoaPorId()", function() {
    it("Método exite?", function() {
      expect(ServiceTeste.procurarPessoaPorId).toBeDefined();
    });

    it("Retornar uma pessoa apos procura o seu id", function() {
      expect(ServiceTeste.procurarPessoaPorId("1")).toEqual(unicaPessoa);
    });

    it("Retornar nenhuma pessoa com id que não existe", function() {
      expect(ServiceTeste.procurarPessoaPorId("1220")).not.toBeDefined();
    });
  });
  /*
  it('Testando o Listar', function(){
        expect(ServiceTeste.listar()).toBeDefined();
    })

    it('Testando o Excluir', function(){
        expect(ServiceTeste.excluir()).toBeDefined();
    })*/
});
