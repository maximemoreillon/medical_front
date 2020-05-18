<template>
  <div id="app">
    <AppTemplate applicationName="User manager">

      <template v-slot:navigation>
        <router-link to="/">Home</router-link>
        <router-link to="/weight">Weight</router-link>
        <router-link to="/blood_pressure">Blood pressure</router-link>

      </template>

      <router-view/>

    </AppTemplate>



  </div>
</template>
<script>

import AppTemplate from '@moreillon/vue_application_template'



export default {
  name: 'app',
  components: {
    AppTemplate,
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  margin: 0 1em;
}
nav {
  display: flex;
}

nav a {
  padding: 0.5em;
  color: CurrentColor;
  text-decoration: none;
  font-weight: bold;
}
</style>
