<template>
  <v-parallax height="350" src="/img/home3.jpg">
    <div class="signup_wrapper">
      <v-container>
        <v-row>
          <v-col>
            <div class="content">
              <h1>Let's make art!</h1>
              <p>
                Explore several art forms as your child builds creativity and
                confidence in our new visual arts classes for ages 2-5!
              </p>
              <v-btn class="btn ma-2" outlined rounded elevation="2"
                >Sign Up</v-btn
              >
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </v-parallax>
</template>

<script>
export default {
  name: "Signup",
};
</script>

<style scoped>
*{
  font-family: "Montserrat" !important;
}
.signup_wrapper {
    top: 0;
    left: 0;
    position: absolute !important;
    z-index: 5 !important;
  width: 100% !important;
  height: 100% !important;
  background-color: rgba(0, 0, 0, 0.59) !important;
}
.v-parallax__content {
  position: relative !important;
  padding: 0rem !important;
}
.v-btn:not(.v-btn--round).v-size--default {
    height: 54px;
    min-width: 80px;
    padding: 0 17px;
}
.btn {
    margin-bottom: 50px !important;
  width: 180px;
  background-color: #59c6bc !important;
  color: #fff !important;
  transition: all 1s ease !important;
  border: none !important;
}
.btn:hover {
  color: #282a34 !important;
  background-color: #fff673 !important;
}
.content {
    text-align: center;
    margin-top: 90px; 
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
