import {formataMaiorLanceDoLeilao} from "../../../src/negocio/formatadores/lance";

describe("negocios/formatadores/lance", () => {
    describe("formataMaiorLanceDoLeilao", () => {
        it("ddeve retornar o maior lance do leilão", () =>{
            const lances = [
                {
                  valor: 10,
                },
                {
                  valor: 30,
                },
                {
                  valor: 20,
                },
              ];
              const valorInicial = 5;
              const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
              expect(maiorLance).toBe(30);
        });
        
        it('deve retornar o valor inicial caso não existir lances', () => {
            const lances = [];
            const valorInicial = 5;
            const maiorLance = formataMaiorLanceDoLeilao(lances, valorInicial);
            expect(maiorLance).toBe(5);
          });
    })
})