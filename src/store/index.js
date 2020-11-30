import Vue from 'vue'
import Vuex from 'vuex'
import { latLng } from "leaflet";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        localAtual: latLng(-22.9027800, -43.2075000),
        hospedagens: [
            { coordenada: latLng(-22.985975106442638, -43.20739388465881), nome: 'Hotel Caesar Park', endereco: '' },
            { coordenada: latLng(-22.986239315172153, -43.203359842300415), nome: 'Sol Ipanema Hotel', endereco: '' },
            { coordenada: latLng(-22.98798752439613, -43.19382190704346), nome: 'Hotel Arpoador', endereco: '' },
            { coordenada: latLng(-22.98784924878445, -43.19266319274902), nome: 'Arena Ipanema Hotel', endereco: '' }
        ],
        hospitais: [
            { coordenada: latLng(-22.977438568834373, -43.22376255373936), nome: 'Hospital Municipal Miguel Couto', endereco: 'Rua Mario Ribeiro, 117 - Leblon'},
            { coordenada: latLng(-22.994965053714225, -43.36422059520507), nome: 'Hospital Municipal Lourenço Jorge', endereco: 'Av. Ayrton Senna, 2.000 - Barra da Tijuca'},
            { coordenada: latLng(-22.953373464546296, -43.17693740129471), nome: 'Hospital Municipal Rocha Maia', endereco: 'R. Gen. Severiano, 91 - Botafogo'},
            { coordenada: latLng(-22.98388858009577, -43.19578528404236), nome: 'Hospital Federal de Ipanema', endereco: 'R. Antônio Parreiras, 67 - Ipanema'},
            { coordenada: latLng(-22.96337223600826, -43.21575164794922), nome: 'Hospital Federal da Lagoa', endereco: 'R. Jardim Botânico, 501 - Jardim Botânico'},
            { coordenada: latLng(-22.92752784213357, -43.252551555633545), nome: 'Hospital Federal do Andaraí', endereco: 'R. Leopoldo, 280 - Andaraí'},
            { coordenada: latLng(-22.908633593511695, -43.19051742553711), nome: 'Hospital Municipal Souza Aguiar', endereco: 'Praça da República, 111 - Centro'},
            { coordenada: latLng(-22.86715978995217, -43.24851751327514), nome: 'Hospital Geral de Bonsucesso', endereco: 'Av. Londres, 616 - Bonsucesso'},
        ],
        delegacias: [
            { coordenada: latLng(-22.981752635127894, -43.21854382753372), nome: '14ª DP Leblon', endereco: 'R. Humberto de Campos, 315 - Leblon' },
            { coordenada: latLng(-23.010919562858362, -43.29695284366607), nome: '16ª DP Barra da Tijuca', endereco: 'Praça Des. Araújo Jorge, s/n - Barra da Tijuca' },
            { coordenada: latLng(-22.919736260143775, -43.358506858348846), nome: '41ª DP Tanque', endereco: 'R. Henriqueta, 197 - Tanque' },
            { coordenada: latLng(-22.972302216775898, -43.22590112686157), nome: '15ª DP Gávea', endereco: 'Rua Major Rubens Vaz, 170 - Gávea' },
            { coordenada: latLng(-22.967370549771143, -43.184348344802856), nome: '12ª DP Copacabana', endereco: 'Rua Hilário de Gouvêia, 102 - Copacabana' },
            { coordenada: latLng(-22.947802629201735, -43.18614274263382), nome: '10ª DP Botafogo', endereco: 'R. Bambina, 140 - Botafogo' },
            { coordenada: latLng(-22.92386185239807, -43.177500665187836), nome: '9ª DP Catete', endereco: 'R. Pedro Américo, 1 - Catete' },
            { coordenada: latLng(-22.910022094230534, -43.18432688713074), nome: '5ª DP Centro', endereco: 'Av. Gomes Freire, 320 - Centro' },
            { coordenada: latLng(-22.913391990569824, -43.214603662490845), nome: '18ª DP Praça da Bandeira', endereco: 'R. Barão de Iguatemi, 331 - Praca da Bandeira' },
            { coordenada: latLng(-22.93069227235727, -43.24461355805397), nome: '19ª DP Tijuca', endereco: 'R. Gen. Espírito Santo Cardoso, 208 - Tijuca' },

        ],
        restaurantes: [
            { coordenada: latLng(-22.97249977605232, -43.19057106971741), nome: 'Comida mineira', endereco: 'R. Barata Ribeiro, 638 - Copacabana' },
            { coordenada: latLng(-22.972938109665776, -43.19130063056945), nome: 'Cardomo a Quilo', endereco: 'R. Constante Ramos, 115 - A - Copacabana' },
            { coordenada: latLng(-22.972425691357508, -43.18797469139099), nome: 'Haru Sushi Bar', endereco: 'R. Raimundo Corrêa, 10 - Copacabana' },
            { coordenada: latLng(-22.967269296836154, -43.181430101394646), nome: 'Aipo e Aipim', endereco: 'R. Constante Ramos, 115 - A - Copacabana' },
            { coordenada: latLng(-22.963832826046623, -43.175969794392586), nome: 'Copa Grill Churrascaria', endereco: 'R. Min. Viveiros de Castro, 47 - Copacabana' },
            { coordenada: latLng(-22.98447503306494, -43.19842390716076), nome: 'Carretão Ipanema Grill', endereco: 'R. Visc. de Pirajá, 112 - Ipanema' },
            { coordenada: latLng(-22.984992344202148, -43.209121227264404), nome: 'Delírio Tropical', endereco: 'Rua Garcia dAvila, 48 - Ipanema' },
            { coordenada: latLng(-22.982919383818764, -43.20744886994362), nome: 'Gula Gula Ipanema', endereco: 'R. Barão da Torre, 446 - Ipanema' },
            { coordenada: latLng(-22.98373301530195, -43.21985274553299), nome: 'Mc Donalds', endereco: 'Av. Ataulfo de Paiva, 406 - Lojas A/B - Leblon' },
            { coordenada: latLng(-22.984024390483583, -43.222050815820694), nome: 'Balada Mix', endereco: 'Av. Ataulfo de Paiva, 620 - Leblon' },
            { coordenada: latLng(-22.949279645354643, -43.18567335605621), nome: 'Verano restaurante e pizzaria', endereco: 'R. São Clemente, 104 - Botafogo' },
            { coordenada: latLng(-22.95509369610019, -43.19518983364105), nome: 'Vegan Vegan', endereco: 'R. Voluntários da Pátria, 402 - Loja B - Botafogo' },
            { coordenada: latLng(-22.939854128375373, -43.17704737186432), nome: 'Brasinha Gourmet', endereco: 'Rua Senador Vergueiro, 238 - Flamengo' },
            { coordenada: latLng(-22.937882986027464, -43.177626729011536), nome: 'Marquês Gourmet', endereco: 'R. Marquês de Paraná, 128 - Loja D - Flamengo' },
            { coordenada: latLng(-22.95627178893726, -43.198590874671936), nome: 'Boomerang Mix', endereco: 'Rua Humaitá, 88 - Humaitá' },
        ],
        pontosTuristicos: [
            { coordenada: latLng(-22.990291274026948, -43.19102704524994), nome: 'Pedra do Arpoador', endereco: 'Av. Francisco Bhering, s/n - Ipanema'},
            { coordenada: latLng(-22.95189772801472, -43.210832476615906), nome: 'Cristo Redentor', endereco: 'Parque Nacional da Tijuca - Alto da Boa Vista'},
            { coordenada: latLng(-22.975660685201916, -43.186655044555664), nome: 'Praia de Copacabana', endereco: ''},
            { coordenada: latLng(-22.951458091258168, -43.16496133804321), nome: 'Bondinho do Pão de Açúcar', endereco: 'Av. Pasteur, 520 - Urca'},
            { coordenada: latLng(-22.99727142014451, -43.28445911407471), nome: 'Pedra da Gávea', endereco: ''},
        ],
        praias:[{}],
    },
    getters: {
        getLocalAtual: state => state.localAtual,
        getTipo: (state) => (tipo) => {
            return tipo === 'delegacias' ? state.delegacias : tipo === 'hospitais' ? state.hospitais : tipo === 'restaurantes' ? state.restaurantes 
            : tipo ==='hospedagens' ? state.hospedagens : tipo === 'pontos turisticos' ? state.pontosTuristicos : state.praias;
        }
        // getHoteis: state => state.hoteis,
        // getHospitais: state => state.hospitais,
        // getDelegacias: state => state.delegacias,
        // getRestaurantes: state => state.restaurantes,
        // getPontosTuristicos: state => state.pontosTuristicos
    },
})

