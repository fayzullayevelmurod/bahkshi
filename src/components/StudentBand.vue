<template>
  <div class="counter_on">
    <v-container>
      <h1 class="studenttitle">Bakhshi School</h1>
      <p class="studenttext">
        We have talented and very experienced instructors who teach piano,
        violin, guitar, cello, and other instruments.
      </p>
      <v-row class="counter_wrapper" justify="center">
        <v-col class="counter_in" cols="12" md="3">
          <div class="counter_radius">
            <span class="counter">238</span>
          </div>
          <h4>Students</h4>
        </v-col>
        <v-col class="counter_in" cols="12" md="3">
          <div class="counter_radius">
            <span class="counter">35</span>
          </div>
          <h4>Teachers</h4>
        </v-col>
        <v-col class="counter_in" cols="12" md="3">
          <div class="counter_radius">
            <span class="counter">10</span>
          </div>
          <h4>Directions</h4>
        </v-col>
        <v-col class="counter_in" cols="12" md="3">
          <div class="counter_radius">
            <span class="counter">15</span>
          </div>
          <h4>Victory</h4>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "StudentBand",
  mounted() {
    $(".counter").counterUp({ delay: 10, time: 2000 });
  },
};
</script>

<style scoped>
*{
  font-family: "Montserrat" !important;
}
/* .counter_on {
  background-image: url("/img/");
} */
.counter_wrapper {
  text-align: center;
}
.studenttitle {
  margin-top: 50px;
  text-align: center;
  font-size: 35px;
}
.studenttext {
    font-size: 20px;
  text-align: center;
  margin-bottom: 50px;
}
.counter_radius {
    display: flex;
    align-items: center;
    justify-content: center;
   width: 150px !important;
  height: 150px !important; 
  border-radius: 50%;
    border: 1px solid red;
  outline: 1px solid blue;
  outline-offset: 25px;
    background-color: rgba(0, 0, 0, 0.39) !important;
}
.counter {
    padding: 20px;
  color: white;
  font-size: 45px;
}
.counter_in {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  text-align: center;
  margin: 70px 0 !important;
}
h4 {
  font-size: 30px;
  margin-top: 50px;
}
</style>
