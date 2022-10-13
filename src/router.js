import { createRouter, createWebHistory } from 'vue-router';
//createWebHashHistory

import Site from '@/views/Site'
import Home from '@/views/Home';
import Login from '@/views/Login';
import Dashboard from '@/components/dashboard/Dashboard';
import DashboardRodape from '@/components/dashboard/DashboardRodape';
import VendasPadrao from '@/components/vendas/VendasPadrao';
import Vendas from '@/components/vendas/Vendas';
import Servico from '@/components/servicos/Servico';
import Servicos from '@/components/servicos/Servicos';
import Opcoes from '@/components/servicos/Opcoes';
import Indicadores from '@/components/servicos/Indicadores';
import Leads from '@/components/vendas/Leads';
import Lead from '@/components/vendas/Lead';
import Contratos from '@/components/vendas/Contratos';
import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada';

const routes = [
    { path: '/', component: Site },
    { path: '/entrar', redirect: 
        { name: 'login' }
    },
    { path: '/login', component: Login, name: 'login' },
    { path: '/home', component: Home, children: 
        [
            { path: 'vendas', component: Vendas, children: 
                [
                    { path: '', component: VendasPadrao },
                    { path: 'leads', component: Leads, name: 'leads' },
                    { path: 'leads/:id', component: Lead, name: 'lead' },
                    { path: 'contratos', component: Contratos, name: 'contratos' },
                ] 
            },
            { path: 'servicos', component: Servicos, name: 'servicos', children: 
                [
                    { path: ':id', name: 'servico', components: 
                        { default: Servico, opcoes: Opcoes, indicadores: Indicadores }
                    }
                ]   
            },
            { path: 'dashboard', components:
                { default: Dashboard, rodape: DashboardRodape },
            },
        ]
    },

    // { path: '/:catchAll(.*)*', redirect: '/' }, // no vue 2 usa apenas path: '*'
    { path: '/:catchAll(.*)*', component: PaginaNaoEncontrada }
];  

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router
