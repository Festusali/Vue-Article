<template>
  <div class="row my-5 mx-2">
    <header class="border-bottom border-2 border-success">
      <h1 class="text-center mb-4">
        <span class="border-bottom border-1 border-gray">{{
          article.title
        }}</span>
      </h1>
      <strong>Published On:</strong> <small>{{ article.date }}</small>
      <button
        type="submit"
        class="btn btn-danger float-end mb-1"
        @click="deleteArticle()"
      >
        <span class="fas fa-trash"></span>
        Delete
      </button>
      <router-link
        class="btn btn-success float-end mx-3"
        :to="{ name: 'update', params: { id: article.id } }"
      >
        Update
      </router-link>
    </header>
    <div class="row pt-3">
      <div class="panel">
        <div class="article-body">
          {{ article.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      article: {},
    };
  },
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  methods: {
    getArticleData() {
      fetch(`http://127.0.0.1:5000/article/${this.id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          this.article = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    deleteArticle() {
      fetch(`http://127.0.0.1:5000/delete/${this.id}/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        this.$router.push({
          name: "home",
        });
      });
    },
  },
  created() {
    this.getArticleData();
  },
};
</script>

<style>
div.article-body { white-space: pre-wrap; }
</style>