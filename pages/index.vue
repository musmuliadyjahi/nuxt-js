<template>
  <Items :page="'Pokemon'"></Items>
</template>

<script>
import Items from '~/components/Items.vue'
// import { mapState } from 'vuex'
export default {
  components: {
    Items
  },

  async fetch({ store }) {
    await store.dispatch('load_items', 'https://pokeapi.co/api/v2/pokemon')
  }
  // computed: mapState(['pokemons'])
}
</script>
