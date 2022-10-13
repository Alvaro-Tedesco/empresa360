<template>
  <div>
    <h3>Detalhes do Lead {{ $route.params.id }}</h3>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">ID</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control-plaintext" :value="data.id">
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Nome</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control" :value="data.nome">
      </div>
    </div>

    <div class="mb-3 row">
      <label class="col-sm-2 col-form-label">Telefone</label>
      <div class="col-sm-10">
        <input type="text" readonly class="form-control" :value="data.telefone">
      </div>
    </div>

    <div class="col-auto d-flex justify-content-between">
      <button type="button" class="btn btn-warning" @click="$router.push({ name: 'leads' })">Voltar</button>
      <button type="button" class="btn btn-primary">Atualizar</button>
    </div>
  </div>
</template>

<script>
import Api from '../../mixins/Api';

export default {
  name: 'Lead',
  mixins: [Api],
  created() {
    this.getData(`http://localhost:3000/leads/${this.$route.params.id}`);
  }
}
</script>

<style scoped>

</style>