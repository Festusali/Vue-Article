<template>
  <div class="row my-5 mx-2">
    <header class="text-center">
      <h1 class="border-bottom border-1 border-primary">Create New Article</h1>
    </header>

    <div class="container mt-3">
      <div class="alert alert-danger alert-dismissible fade show" role="alert" v-if="error">
        All fields are required.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
      <form @submit.prevent="createArticle()">
        <div class="mb-3">
          <label for="title" class="form-label">Article Title</label>
          <input
            type="text"
            class="form-control"
            id="title"
            aria-describedby="titleHelp"
            placeholder="Some article"
            v-model="title"
          />
          <div id="titleHelp" class="form-text">
            Input the title of your article.
          </div>
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">Article Body</label>
          <textarea
            class="form-control"
            id="body"
            placeholder="Article details."
            aria-describedby="bodyHelp"
            rows="7"
            v-model="body"
          ></textarea>
          <div id="bodyHelp" class="form-text">
            Enter detailed description of your article.
          </div>
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="consent"
            v-model="consent"
          />
          <label class="form-check-label" for="consent"
            >I declare that this article is originally mine and not
            plagiarized.</label
          >
        </div>
        <button type="submit" class="btn btn-primary">
          <span class="fas fa-paper-plane"></span>
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: null,
      body: null,
      consent: null,
      error: null,
    };
  },
  methods: {
    createArticle() {
      if (!this.title && !this.body && !this.consent == null) {
        this.error = true;
      } else {
        fetch("http://127.0.0.1:5000/add/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: this.title, body: this.body }),
        })
          .then((resp) => resp.json())
          .then((data) => {
            this.$router.push({
              name: "detail",
              params: {
                id: data.id
              }
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
};
</script>

<style>
</style>