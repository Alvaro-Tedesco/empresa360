<template>
  <div class="card">
    <div class="card-header bg-primary text-white">
      {{ data.servico }}
    </div>
    <div class="card-body">
      <p class="card-text">{{ data.descricao }}</p>
    </div>


  </div>
</template>

<script>
import Api from '../../mixins/Api';

export default {
  name: 'Servico',
  mixins: [Api],

  methods: {
    getDataApi(url = this.$route.params.id) {
      this.getData(`http://localhost:3000/servicos/${url}`);
    },
  },

  // watch: {
  //   $route(newValue) {
  //     if (newValue.params.id !== undefined) {
  //       this.getDataApi(newValue.params.id);
  //     }

  //   },
  // },

  beforeRouteUpdate(to, from, next) {
    // to: é o $route para onde queremos ir
    // from: é o $route de onde estávamos
    // next: faz com que o fluxo de navegação siga em frente

    if (to.params.id !== undefined) {
      this.getDataApi(to.params.id);
    }

    next();
  },

  created() {
    this.getDataApi();
  }
}
</script>

<style scoped>

</style>