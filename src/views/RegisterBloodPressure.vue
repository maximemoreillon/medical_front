<template>
  <div class="register_blood_pressure">
    <h1>Blood pressure</h1>
    <form class="" @submit.prevent="register()">
      <label>Systolic pressure [mm Hg]</label>
      <input type="number" v-model="systolic_pressure">
      <label>Diastolic pressure [mm Hg]</label>
      <input type="number" v-model="diastolic_pressure">
      <input type="submit">
    </form>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'RegisterBloodPressure',
  components: {

  },
  data(){
    return {
      systolic_pressure: 0,
      diastolic_pressure: 0,
    }
  },
  methods: {
    register(){
      this.axios.post(`${process.env.VUE_APP_MEDICAL_API_URL}/blood_pressure/register`, {
        systolic_pressure: this.systolic_pressure,
        diastolic_pressure: this.diastolic_pressure,
      })
      .then(() => {
        this.$router.push({name: 'blood_pressure'})
      })
      .catch(error => {
        alert('Something went wrong')
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

form {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
}

form > * {
  margin: 0.5em;
}
</style>
