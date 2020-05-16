<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/weight">Weight</router-link>
      <router-link to="/blood_pressure">Blood pressure</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
