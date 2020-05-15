<template>
  <div class="blood_pressure">
    BLOOD PRESSURE
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'BloodPressure',
  components: {

  },
  mounted(){
    this.get_blood_pressure_history()
  },
  methods: {
    get_blood_pressure_history(){
      this.axios.get(`${process.env.VUE_APP_MEDICAL_API_URL}/blood_pressure/history`)
      .then(response => {console.log(response.data)})
      .catch(error => {
        if(error.response) console.log(error.response.data)
        else console.log(error)
      })
    }
  }
}
</script>
