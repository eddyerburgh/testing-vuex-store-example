<template>
  <div>
    {{count}}
    <button @click="increment">Increment</button>
    <p>{{evenOrOdd}}</p>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'counter',
  methods: {
    ...mapMutations('counter', ['increment'])
  },
  computed: {
    ...mapGetters('counter', ['evenOrOdd', 'count'])
  }
}
</script>
