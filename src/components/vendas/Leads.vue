<template>
  <div>
    <h3>Leads</h3>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nome</th>
          <th scope="col">Telefone</th>
          <th scope="col"></th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in data" :key="index">
          <td>{{ item.id }}</td>
          <td>{{ item.nome }}</td>
          <td>{{ item.telefone }}</td>
          <td>
            <router-link :to="{ name: 'lead', params: { id: item.id } }" class="btn btn-sm btn-primary">
              <i class="bi bi-pencil-square" style="cursor: pointer;"></i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Api from '../../mixins/Api';
export default {
  name: 'Leads',
  mixins: [Api],
  created() {
    this.getData('http://localhost:3000/leads');
  }
}
</script>

<style scoped>

</style>