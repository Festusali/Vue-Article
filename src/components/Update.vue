<template>
  <div class="row my-5 mx-2">
    <header class="text-center">
      <h1 class="border-bottom border-1 border-primary">Update Article</h1>
    </header>

    <div class="container mt-3">
      <div
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
        v-if="error"
      >
        All fields are required.
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
      <form @submit.prevent="updateArticle()">
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
      // article: {}
      title: "",
      body: "",
      consent: false,
      error: null,
    };
  },
  beforeRouteEnter(to, from, next) {
    if (to.params.id !== undefined) {
      fetch(`http://127.0.0.1:5000/article/${to.params.id}/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          return next((vm) => ((vm.title = data.title), (vm.body = data.body)));
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      return next();
    }
  },
  props: {
    id: {
      type: [Number, String],
      required: true,
    },
  },
  methods: {
    /* getArticle() {
      fetch(`http://127.0.0.1:5000/article/${this.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then(resp => resp.json())
      .then(data => {
        this.article = data
      })
      .catch(error => {
        console.error(error)
      })
    }, */
    updateArticle() {
      if (!this.title && !this.body && !this.consent == null) {
        this.error = true;
      } else {
        fetch(`http://127.0.0.1:5000/update/${this.id}/`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: this.title,
            body: this.body,
          }),
        })
          .then(() => {
            this.$router.push({
              name: "detail",
              params: { id: this.id },
            });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
  },
  /* created() {
    this.getArticle();
  }, */
};
</script>

<style>
</style>