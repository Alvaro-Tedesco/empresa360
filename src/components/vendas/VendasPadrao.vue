<template>
    <div>
        <div class="row">
            <div class="col-3 offset-2 bg-suc">
                <div class="card">
                    <div class="card-header bg-success text-white">Leads</div>
                    <div class="card-body">{{ leads.length }}</div>
                </div>
            </div>

            <div class="col-3 offset-2">
                <div class="card">
                    <div class="card-header  bg-success text-white">Contratos</div>
                    <div class="card-body">{{ contratos.length }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from '@/mixins/Api';

export default {
    name: 'VendasPadrao',
    mixins: [Api],
    data() {
        return {
            contratos: [],
            leads: []
        }
    },
    methods: {
        async getContratos() {
            this.contratos = await this.getData('http://localhost:3000/contratos');
            console.log('contratos', this.contratos)
        },

        async getLeads() {
            this.leads = await this.getData('http://localhost:3000/leads');
        }
    },

    mounted() {
        this.getContratos();
        this.getLeads();
    }
}
</script>
