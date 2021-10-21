<template>
  <div class="row my-5 mx-2">
    <header class="text-center">
      <h1 class="border-bottom border-1 border-primary">List of Articles</h1>
    </header>
    <div class="container mt-5">
      <div v-for="article in articles" :key="article.id">
        <h3>
          <router-link
            class="link-title"
            :to="{ name: 'detail', params: { id: article.id } }"
          >
            {{ article.title }}
          </router-link>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },

  methods: {
    getArticles() {
      fetch("http://127.0.0.1:5000/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.articles = data; //.push(...data)
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>

<style>
.link-title {
  padding: 10px 0;
  text-decoration: none;
}
.link-title:hover {
  color: #0cbb82 !important;
}
</style>