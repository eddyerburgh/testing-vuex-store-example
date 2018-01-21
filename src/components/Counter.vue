<template>
  <div>
    {{count}}
    <button @click="increment">Increment</button>
    <p>{{evenOrOdd}}</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'counter',
  methods: {
    increment() {
      this.$store.commit('increment')
    }
  },
  computed: {
    count() {
      return this.$store.state.count
    },
    evenOrOdd() {
      return this.$store.getters.evenOrOdd
    }
  }
}
</script>
