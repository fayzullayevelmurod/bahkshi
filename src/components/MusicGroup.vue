<template class="musicgroup">
  <v-container id="MusicGroup" class="pa-4 mt-16 pb-10 px-0 text-center">
    <v-card md="8" elevation="0">
      <v-container>
        <h1 class="musicgroupstitle" style="color: #000">Music Group</h1>
      </v-container>
    </v-card>
    <v-row justify="center" class="fill-height text-center">
      <v-col class="musicgroup_card" cols="10" md="4">
        <v-img class="musicgroup_card_img" src="/img/dombra.jpg"></v-img>
        <h1 class="title">Baxshichilik</h1>
        <p>
          Our school is a solution for families who would like to expose their children to the world of music.Lorem ipsum dolor sit amet, mel modus dicam...
        </p>
      </v-col>
      <v-col class="musicgroup_card" cols="10" md="4">
        <v-img class="musicgroup_card_img" src="/img/dutor.jpeg"></v-img>
        <h1 class="title">Ananviy sozandalik</h1>
        <p>
          Our school is a solution for families who would like to expose their children to the world of music.Lorem ipsum dolor sit amet, mel modus dicam...
        </p>
      </v-col>
      <v-col class="musicgroup_card" cols="10" md="4">
        <v-img class="musicgroup_card_img" src="/img/tanbur.jpg"></v-img>
        <h1 class="title">Ananaviy xonandalik</h1>
        <p>
          Our school is a solution for families who would like to expose their children to the world of music.Lorem ipsum dolor sit amet, mel modus dicam...
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Teachers",
};
</script>

<style scoped>
*{
  font-family: "Montserrat" !important;
}
.title{
    margin: 20px 0;
  font-style: normal;
  font-weight: 600;
  font-size: 25px !important;
  line-height: 49px;
}
.musicgroup{
    background-color: #F7F7F7 !important;
}
.messangers a {
  margin: 0 10px !important;
}
.messangers a i {
  color: grey !important;
  font-size: 40px !important;
}
.messangers a .facebook:hover {
  color: #1877f2 !important;
}
.messangers a .instagram:hover {
  color: #e1306c !important;
}
.messangers a .telegram:hover {
  color: #0088cc !important;
}
.musicgroup_card_img {
  border-radius: 50%;
  width: 220px !important;
  height: 220px !important;
  transition: all 0.7s ease;
}
.musicgroup_card {
  margin-top: 20px;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  flex-direction: column !important;
}
.v-card__title {
  padding: 5px 16px;
}
.btn {
  border: none !important;
  padding: 0 100px !important;
  color: #fff !important;
  transition: all 1s ease !important;
  background-color: #59c6bc !important;
}
.btn:hover {
  border: transparent !important;
  color: #000 !important;
  background-color: #fff673 !important;
}
.musicgroupstitle {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
}
@media (max-width: 600px) {
  .btn {
    width: 70%;
    padding: 0 !important;
  }
}
@media (max-width: 570px) {
  h1 {
    font-size: 37px !important;
  }
}
</style>
