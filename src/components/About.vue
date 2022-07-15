<template>
  <v-container id="About" class="pa-4 mt-16">
    <v-row justify="center">
      <v-col
        cols="11"
        md="6"
        class="abouttext"
        style="background-color: #f7f7f7 !important"
      >
        <h1 class="abouttitle" style="color: #282a34;">About</h1>
        <p style="color: #6d707c">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nihil
          quibusdam expedita dolorem ut accusamus temporibus sunt eaque
          molestiae doloribus esse eius, natus eum odit inventore totam
          cupiditate tempore consequuntur? Voluptate culpa molestias, aspernatur
          explicabo quae voluptatibus, ipsa quo perferendis tempore
          exercitationem necessitatibus, sit vel dolores! Voluptate tempore
          placeat dolores!
        </p>
        <v-btn class="btn ma-2" outlined rounded elevation="2">more...</v-btn>
      </v-col>
      <v-col style="height: 450px; margin: 0; padding: 0" cols="10" md="6">
        <v-img style="height: 100%" src="/img/About.jpg"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
*{
  font-family: "Montserrat" !important;
}
p {
  margin-top: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 45px;
}
.btn {
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
.abouttitle {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
}
@media only screen and (max-width: 960px) {
  p {
    text-align: center !important;
  }
  .abouttext {
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    flex-direction: column !important;
  }
}
@media (max-width: 570px) {
  h1 {
    font-size: 37px !important;
  }
  p {
    margin-top: 30px;
    font-size: 18px !important;
  }
}
</style>
