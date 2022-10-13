<template>
  <div>
    <div class="card mb-4">
      <div class="card-header">Contratos</div>
      <div class="card-body">
        <div class="row">
          <div class="col-6">
            <label class="form-label">ID Contrato:</label>
            <input type="text" class="form-control" v-model="form.id_like">
          </div>
          <div class="col-6">
            <label class="form-label">Data início:</label>
            <div class="input-group">
              <input type="date" class="form-control" v-model="form.data_inicio_gte">
              <input type="date" class="form-control" v-model="form.data_inicio_lte">
            </div>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-primary" @click="getFilteredData()">Pesquisar</button>
      </div>
    </div>

    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Lead</th>
          <th scope="col">Serviço</th>
          <th scope="col">Data Início</th>
          <th scope="col">Data Fim</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.lead.nome }}</td>
          <td>{{ item.servico.servico }}</td>
          <td>{{ item.data_inicio }}</td>
          <td>{{ item.data_fim }}</td>

        </tr>
      </tbody>
    </table>

  </div>
</template>
  
<script>
import Api from '../../mixins/Api';
export default {
  name: 'Contratos',
  mixins: [Api],
  data() {
    return {
      relacoesApi: '_expand=lead&_expand=servico',
      form: {
        id_like: '',
        data_inicio_gte: '',
        data_inicio_lte: '',
      }
    }
  },

  methods: {
    getFilteredData() {
      this.getDataApi();
    },

    getDataApi() {
      let url = `${this.apiPath}/contratos?${this.relacoesApi}`

      let queryParams = this.getQueryParams();
      let filtersParams = this.getFiltersParams();

      if (queryParams !== '') {
        url = `${url}&${queryParams}`
      } else if (filtersParams !== '') {
        url = `${url}&${filtersParams}`
      }

      this.getData(url);
    },

    getQueryParams() {
      return new URLSearchParams(this.$route.query).toString();
    },

    getFiltersParams() {
      Object.keys(this.form).forEach((properties) => {
        if (this.form[properties] == '') {
          delete this.form[properties];
        }
      });
      
      return new URLSearchParams(this.form).toString();
    }
  },
  created() {
    this.getDataApi();
  }
}
</script>
  
<style scoped>

</style>
