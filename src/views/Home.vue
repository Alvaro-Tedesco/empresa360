<template>
  <div>
    <nav class="navbar navbar-light bg-light menu-superior">
      <div class="container">
        <router-link class="navbar-brand" to="/home">Empresa 360</router-link>
        <div class="navbar-nav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Sair</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="d-flex">
      <div class="list-group menu-esquerda">
        <router-link class="list-group-item list-group-item-action" to="/home/dashboard" exact-active-class="active">
        <i class="bi bi-speedometer2"></i> Dashboard</router-link>
        
        <div class="btn-group dropend">
          <router-link class="list-group-item list-group-item-action" to="/home/vendas" exact-active-class="active">
            <i class="bi bi-cart"></i> Vendas</router-link>

          <button type="button" data-bs-toggle="dropdown" aria-expanded="false"
            class="btn dropdown-toggle dropdown-toggle-split"></button>

          <ul class="dropdown-menu">
            <li>
              <router-link class="list-group-item list-group-item-action" to="/home/vendas/leads" exact-active-class="active">
                <i class="bi bi-caret-right"></i> Leads</router-link>
            </li>
            <li>
              <router-link class="list-group-item list-group-item-action" :to="{ name: 'contratos' }" exact-active-class="active">
                <i class="bi bi-caret-right"></i> Contratos</router-link>
            </li>
          </ul>
        </div>
        
        <router-link class="list-group-item list-group-item-action" :to="{ name: 'servicos' }" exact-active-class="active">
        <i class="bi bi-card-checklist"></i> Serviços</router-link>
      </div>

      <div class="w-100">
        <nav aria-label="breadcrumb" class="pt-1 ps-3">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
          </ol>
        </nav>

        <div class="container-fluid">
          <router-view></router-view>
        </div>

      </div>
    </div>

    <div class="rodape">
      <router-view name="rodape"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.menu-superior {
  border-bottom: solid 1px #ccc;
}

.menu-esquerda {
  border-right: solid 1px #ccc;
  width: 250px;
}

/* .list-group-item {
  border-top: none;
  border-right: none;
} */

.dropdown-menu {
  --bs-dropdown-padding-y: unset;
}

/* .router-link-exact-active {
  color: #ffffff;
  background-color: green;
  border-color: black;
} */

.rodape {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: darkolivegreen;
}

</style>
