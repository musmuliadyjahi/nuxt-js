<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="heading mt-5 mb-5">
            <nav>
              <nuxt-link to="/">Home</nuxt-link>
              <nuxt-link to="/location">Location</nuxt-link>
            </nav>
            <h1>Data API</h1>
            <p>Mengunnakan Nuxt.JS</p>
          </div>
          <div class="list-group">
            <div class="list-group-item">
              <div class="">
                <h2 class="">Data {{ page }}</h2>
              </div>
            </div>
          </div>
          <div v-for="item in items" :key="item.name" class="list-group">
            <div class="list-group-item list-group-item-action">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ item.name }}</h5>
              </div>
              <nuxt-link to="'/'+ page + '/' + item.name">
                <small>{{ item.url }}</small>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState(['items']),
  props: ['page']
}
</script>
