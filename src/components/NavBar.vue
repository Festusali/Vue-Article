<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container-fluid">
      <router-link
      class="navbar-brand brand-style mx-3"
      to="/">
      Flask and Vue.js 3
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse d-flex mx-3" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item mx-1">
            <router-link class="nav-link border-1 border-bottom border-success" aria-current="page" to="/create/">
            <span class="fas fa-plus"></span> Create
            </router-link>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link" href="#">
              <span class="fas fa-chart-line"></span> Trending
            </a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link" href="#">
              <span class="fas fa-chart-bar"></span> Popular
            </a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link" href="#">
              <span class="fas fa-eye"></span> Views
            </a>
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">
            <span class="fas fa-search"></span> 
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.brand-style {
    font-size: 28px;
    color: rgb(65, 211, 5) !important;
}

.nav-link {
    color: #0cbb82 !important;
    font-weight: bolder;
}
</style>
