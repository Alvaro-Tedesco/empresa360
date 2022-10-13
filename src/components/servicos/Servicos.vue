<template>
  <div>
    <h3>Serviços</h3>
    <hr>
    <div class="row">
      <div class="col mb-2" v-for="(item, index) in data" :key="index">
        <div class="card" style="width: 11rem;">
          <img class="card-img-top" :src="`/img/${item.icone}`" alt="Sem Imagem">
          <div class="card-body text-center">
          <router-link :to="{ name: 'servico', params: { id: item.id } }">
            <p class="card-text">{{item.servico}}</p>          
          </router-link>
          </div>
        </div>
      </div>
    </div>

    <router-view class="mt-3"></router-view> <!-- sem nome é o default -->
    <router-view name="opcoes"></router-view>
    <router-view name="indicadores"></router-view>
  </div>
</template>
  
<script>
import Api from '../../mixins/Api';
export default {
  name: 'Servicos',
  mixins: [Api],
  created() {
    this.getData('http://localhost:3000/servicos');
  }
}
</script>
  
<style scoped>

</style>
