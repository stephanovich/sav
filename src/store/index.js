import Vue from 'vue'
import Vuex from 'vuex'
import { latLng } from "leaflet";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        localAtual: latLng(-22.9027800, -43.2075000),
        hospedagens: [
            { coordenada: latLng(-22.897789403513983, -43.123961101818395), nome: 'Plaza hotel', endereco: 'R. Gen. Andrade Neves, 118 - Centro, Niterói - RJ' },
            { coordenada: latLng(-22.89801672170917, -43.12411130551484), nome: 'Niterói palace', endereco: 'R. Gen. Andrade Neves, 134 - Centro, Niterói - RJ' },
            { coordenada: latLng(-22.899874786606897, -43.126820336631575), nome: 'Plácio Hotel', endereco: 'R. Gen. Andrade Neves, 265 - São Domingos, Niterói - RJ' },
            { coordenada: latLng(-22.908364237983715, -43.169488920128806), nome: 'Hotel Ibis Rio de Janeiro Santos Dumont', endereco: 'Av. Mal. Câmara, 280 - Centro, Rio de Janeiro - RJ' },
            { coordenada: latLng(-22.922218987889853, -43.17728878379492), nome: 'Hospedaria Glória', endereco: 'R. do Catete, 34 - Glória, Rio de Janeiro - RJ' },
            { coordenada: latLng(-22.928839516499476, -43.17787886963608), nome: 'Royal Regency Palace Hotel', endereco: 'R. Artur Bernardes, 15 - Catete, Rio de Janeiro - RJ' },
            { coordenada: latLng(-22.907671767068127, -43.10693439812485), nome: 'Hicaraí suítes', endereco: 'Rua Mariz e Barros, 147 - Icaraí, Niterói - RJ' },
            { coordenada: latLng(-22.90420240230556, -43.12183007574187), nome: 'N Niterói Hotel', endereco: 'R. Dr. Paulo Alves, 14 - Ingá, Niterói - RJ, 24210-445' },

        ],
        hospitais: [
            { coordenada: latLng(-22.977438568834373, -43.22376255373936), nome: 'Hospital Municipal Miguel Couto', endereco: ''},
            { coordenada: latLng(-22.894501747923233, -43.11561745194479), nome: 'CHN Complexo Hospitalar de Niterói', endereco: ''},
            { coordenada: latLng(-22.894126168786492, -43.11276358166504), nome: 'Hospital Icaraí', endereco: ''},
            { coordenada: latLng(-22.89507499827216, -43.112076936111066), nome: 'Hospital Universitario Antônio Pedro', endereco: ''},
            { coordenada: latLng(-22.883925832604234, -43.0830876202627), nome: 'UPA Fonseca', endereco: ''},
            { coordenada: latLng(-22.925975012634904, -43.20572377096462), nome: 'Hospital Amparo', endereco: ''},
            { coordenada: latLng(-22.908633593511695, -43.19051742553711), nome: 'Hospital Municipal Souza Aguiar', endereco: ''},
        ],
        delegacias: [
            { coordenada: latLng(-22.892401426922017, -43.116104554755985), nome: '11ª Delegacia do serviço militar', endereco: '' },
            { coordenada: latLng(-23.010919562858362, -43.29695284366607), nome: '16ª DP Barra da Tijuca', endereco: 'Praça Des. Araújo Jorge, s/n - Barra da Tijuca' },
            { coordenada: latLng(-22.89348369875879, -43.117689740222865), nome: '76ª Delegacia de policia', endereco: '' },
            { coordenada: latLng(-22.8845010900135, -43.12201516011271), nome: 'Policia militar', endereco: '' },
            { coordenada: latLng(-22.967370549771143, -43.184348344802856), nome: '12ª DP Copacabana', endereco: 'Rua Hilário de Gouvêia, 102 - Copacabana' },
            { coordenada: latLng(-22.947802629201735, -43.18614274263382), nome: '10ª DP Botafogo', endereco: 'R. Bambina, 140 - Botafogo' },
            { coordenada: latLng(-22.884058674388942, -43.114963558573855), nome: 'Delegacia de homicidios de Niterói e São gonçalo', endereco: '' },
            { coordenada: latLng(-22.910022094230534, -43.18432688713074), nome: '5ª DP Centro', endereco: 'Av. Gomes Freire, 320 - Centro' },
            { coordenada: latLng(-22.913391990569824, -43.214603662490845), nome: '18ª DP Praça da Bandeira', endereco: 'R. Barão de Iguatemi, 331 - Praca da Bandeira' },
            { coordenada: latLng(-22.93069227235727, -43.24461355805397), nome: '19ª DP Tijuca', endereco: 'R. Gen. Espírito Santo Cardoso, 208 - Tijuca' },

        ],
        restaurantes: [
            { coordenada: latLng(-22.893024099961142, -43.11456424500737), nome: 'Galeteria da esquina', endereco: 'R. Sen. Nabuco, 38 - Centro, Niterói - RJ' },
            { coordenada: latLng(-22.894541247923414, -43.12036318079532), nome: 'Spoleto', endereco: 'R. da Conceição, 136 - Centro, Niterói - RJ' },
            { coordenada: latLng(-22.896774933294694, -43.12439990532005), nome: 'Outback Steakhouse', endereco: 'Rua Quinze de Novembro, 8 - Shops 121 and 122 - Centro, Niterói - RJ' },
            { coordenada: latLng(-22.90287951593771, -43.11462740250681), nome: 'Icaraí Grill Restaurante', endereco: 'Flat Service, Condomínio Icarai - Rua Coronel Moreira César, 19 - 105 - Icaraí, Niterói - RJ' },
            { coordenada: latLng(-22.963832826046623, -43.175969794392586), nome: 'Copa Grill Churrascaria', endereco: 'R. Min. Viveiros de Castro, 47 - Copacabana' },
            { coordenada: latLng(-22.98447503306494, -43.19842390716076), nome: 'Carretão Ipanema Grill', endereco: 'R. Visc. de Pirajá, 112 - Ipanema' },
            { coordenada: latLng(-22.905300838436965, -43.1120739396697), nome: 'Confeitaria Beira Mar', endereco: 'Rua Coronel Moreira César, 149 - Icaraí, Niterói - RJ' },
            { coordenada: latLng(-22.894487372349058, -43.11942746833333), nome: 'Subway', endereco: 'R. da Conceição, 172 - Centro, Niterói - RJ' },
            { coordenada: latLng(-22.98373301530195, -43.21985274553299), nome: 'Mc Donalds', endereco: 'Av. Ataulfo de Paiva, 406 - Lojas A/B - Leblon' },
            { coordenada: latLng(-22.90587372580449, -43.176535558415914), nome: 'KFC', endereco: 'R. São José, 82 - Loja A/B - Centro, Rio de Janeiro - RJ' },
            { coordenada: latLng(-22.90468170010957, -43.178979880234831), nome: 'Demi-Glace Premium Grill', endereco: 'Sobreloja Shopping Candelaria, R. Gonçalves Dias, 56 - Centro, Rio de Janeiro - RJ' },
            { coordenada: latLng(-22.95509369610019, -43.19518983364105), nome: 'Vegan Vegan', endereco: 'R. Voluntários da Pátria, 402 - Loja B - Botafogo' },
            { coordenada: latLng(-22.90602882643577, -43.18010563574055), nome: 'Coliseu das Massas', endereco: 'R. Sete de Setembro, 171 - Centro, Rio de Janeiro - RJ' },
            { coordenada: latLng(-22.904969444854288, -43.17748237819701), nome: 'Starbucks', endereco: 'Av. Rio Branco, 143 - A - Centro, Rio de Janeiro - RJ' },
            { coordenada: latLng(-22.902354517495176, -43.17687797562536), nome: 'Gallo Carioca', endereco: 'R. do Ouvidor, 70 - Centro, Rio de Janeiro - RJ' },
        ],
        pontosTuristicos: [
            { coordenada: latLng(-22.893941562313568, -43.17947277594085), nome: 'Museu do Amanhã', endereco: 'Praça Mauá, 1 - Centro, Rio de Janeiro - RJ'},
            { coordenada: latLng(-22.95189772801472, -43.210832476615906), nome: 'Cristo Redentor', endereco: 'Parque Nacional da Tijuca - Alto da Boa Vista'},
            { coordenada: latLng(-22.951458091258168, -43.16496133804321), nome: 'Bondinho do Pão de Açúcar', endereco: 'Av. Pasteur, 520 - Urca'},
            { coordenada: latLng(-22.896353160848953, -43.18198332343852), nome: 'Museu de arte do rio', endereco: 'Praça Mauá, 5 - Centro, Rio de Janeiro - RJ'},
            { coordenada: latLng(-22.907378906071536, -43.12601756217587), nome: 'Museu de arte  contemporânea', endereco: 'Mirante da Boa Viagem, s/nº - Boa Viagem, Niterói - RJ'},
            { coordenada: latLng(-22.88855103800339, -43.12769126061979), nome: 'Caminho niemeyer', endereco: 'R. Jorn. Rogério Coelho Neto, s/n - Centro, Niterói - RJ'},
            { coordenada: latLng(-22.903016540695294, -43.13599461451031), nome: 'Forte de São domingos de Gragoatá', endereco: 'Av. Milton Tavares de Souza, 151 - Gragoatá, Niterói - RJ'},
        ],
        praias:[
            {coordenada: latLng(-22.91138889, -43.11083333), nome: 'Praia de Icaraí', endereco: ''},
            {coordenada: latLng(-22.96679444, -43.04854722), nome: 'Praia de Camboinhas', endereco: ''},
            {coordenada: latLng(-22.926165880269334, -43.09607839011997), nome: 'Praia de Charitas', endereco: ''},
            {coordenada: latLng(-22.98944444 , -43.19166667), nome: 'Praia do Arpoador', endereco: ''},
            {coordenada: latLng(-23.01183889, -43.36521667), nome: 'Praia da Barra da tijuca', endereco: ''},
            {coordenada: latLng(-22.98228889, -43.18889444), nome: 'Praia de copacabana', endereco: ''},
            {coordenada: latLng(-22.98916667, -43.22638889), nome: 'Praia do Leblon', endereco: ''},
            {coordenada: latLng(-22.94784444, -43.16354444), nome: 'Praia da Urca', endereco: ''},
            {coordenada: latLng(-22.954293413997053, -43.08603152031939), nome: 'Praia de Piratininga', endereco: ''},
            {coordenada: latLng(-22.974027779818833, -43.03391776860302), nome: 'Praia de Itacoatiara', endereco: ''},
            {coordenada: latLng(-22.969879021356995, -43.04606281034387), nome: 'Praia de Itaipu', endereco: ''},
            {coordenada: latLng(-22.96960243286956, -43.007396086424855), nome: 'Praia de Itaipuaçu', endereco: ''},
        ],
    },
    getters: {
        getLocalAtual: state => state.localAtual,
        getTipo: (state) => (tipo) => {
            return tipo === 'delegacias' ? state.delegacias : tipo === 'hospitais' ? state.hospitais : tipo === 'restaurantes' ? state.restaurantes 
            : tipo ==='hospedagens' ? state.hospedagens : tipo === 'pontos turisticos' ? state.pontosTuristicos : state.praias;
        }
    },
})