<template>
  <v-container id="Teachers" class="pa-4 mt-16 pb-10 px-0 text-center">
    <v-card md="8" elevation="0">
      <v-container>
        <h1 class="teacherstitle" style="color: #000">Teachers</h1>
      </v-container>
    </v-card>
    <v-row justify="center" class="fill-height text-center">
      <v-col class="teacher_card" cols="10" md="3">
          <v-img class="teacher_img" src="/img/teacher1radius.jpg"></v-img>
        <h1>Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          nam.
        </p>
        <div class="messangers">
          <a href="#"><i class="telegram fa-brands fa-facebook"></i></a>
          <a href="#"><i class="instagram fa-brands fa-instagram"></i></a>
          <a href="#"><i class="telegram fa-brands fa-telegram"></i></a>
        </div>
      </v-col>
      <v-col class="teacher_card" cols="10" md="3">
        <v-img class="teacher_img" src="/img/teacher2radius.jpg"></v-img>
        <h1>Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          nam.
        </p>
        <div class="messangers">
          <a href="#"><i class="telegram fa-brands fa-facebook"></i></a>
          <a href="#"><i class="instagram fa-brands fa-instagram"></i></a>
          <a href="#"><i class="telegram fa-brands fa-telegram"></i></a>
        </div>
      </v-col>
      <v-col class="teacher_card" cols="10" md="3">
        <v-img class="teacher_img" src="/img/teacher3radius.jpg"></v-img>
        <h1>Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          nam.
        </p>
        <div class="messangers">
          <a href="#"><i class="telegram fa-brands fa-facebook"></i></a>
          <a href="#"><i class="instagram fa-brands fa-instagram"></i></a>
          <a href="#"><i class="telegram fa-brands fa-telegram"></i></a>
        </div>
      </v-col>
      <v-col class="teacher_card" cols="10" md="3">
        <v-img class="teacher_img" src="/img/teacher4radius.jpg"></v-img>
        <h1>Name</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium,
          nam.
        </p>
        <div class="messangers">
          <a href="#"><i class="telegram fa-brands fa-facebook"></i></a>
          <a href="#"><i class="instagram fa-brands fa-instagram"></i></a>
          <a href="#"><i class="telegram fa-brands fa-telegram"></i></a>
        </div>
      </v-col>
    </v-row>
    <div style="width: 100% !important; text-align: center">
      <v-btn class="btn my-5 mt-10 px-15" outlined rounded elevation="2"
        >More...</v-btn
      >
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Teachers",
};
</script>

<style scoped>
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
.teacher_img{
  border-radius: 50%;
  width: 270px !important;
  height: 260px !important;
  transition: all 0.7s ease;
  overflow: hidden;
}
.teacher_card {
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
.teacherstitle {
  font-family: "Montserrat" !important;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 49px;
}
h1{
    font-family: "Montserrat" !important;
}
p{
    font-family: "Montserrat" !important;
}
/* p {
  margin-top: 40px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
} */
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
  /* p {
    font-size: 18px !important;
  } */
}
</style>
