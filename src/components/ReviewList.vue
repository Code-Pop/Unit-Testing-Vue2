<template>
  <p v-if="error" data-testid="review-error">{{ error }}</p>

  <!-- <ul v-else>
    <li v-for="(review, index) of reviews" :key="index">
      {{ review }}
    </li>
  </ul> -->

  <div v-else data-testid="review-list">{{ reviews }}</div>
</template>

<script>
import { getReviews } from '../services/axios.js'

export default {
  data() {
    return {
      reviews: [],
      error: null,
      loading: false
    }
  },

  async created() {
    try {
      this.reviews = await getReviews()
    } catch (err) {
      this.error = 'Oops! Something went wrong'
    }
  }
}
</script>
