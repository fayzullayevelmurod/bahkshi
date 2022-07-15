<template>
  <div class="header" :class="header ? 'header-active' : ''">
    <v-container
      class="d-flex white--text transparent"
      style="align-items: center"
    >
      <div class="img-logo">
        <div class="relative" :class="header ? 'img-logo-active' : ''">
          <router-link :to="{ name: 'DefaultView' }">
            <h1>Logo</h1>
          </router-link>
        </div>
      </div>
      <v-spacer></v-spacer>
      <div class="links d-none d-md-flex">
        <a href="#" class="link">Home</a>
        <a href="#About" class="link">About</a>
        <a href="#Teachers" class="link">Teachers</a>
        <a href="#News" class="link">News</a>
        <a href="#Contact" class="link">Contact</a>
      </div>
      <div class="btn-group">
        <v-btn
          elevation="0"
          width="10px !important"
          class="d-flex d-md-none"
          dark
          @click="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </v-container>
    <v-navigation-drawer
      dark
      v-model="drawer"
      absolute
      height="100vh"
      style="z-index: 40; background: #12232e !important"
    >
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="/img/logo.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Bakhshi school</v-list-item-title>
        </v-list-item-content>

        <v-list-item-content>
           
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: false,
      drawer: false,
      items: [
        { title: "Home" },
        { title: "About" },
        { title: "Teachers" },
        { title: "News" },
        { title: "Contact" },
      ],
    };
  },
  methods: {
    Toggle() {
      this.drawer = !this.drawer;
    },
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        this.header = true;
      } else {
        this.header = false;
      }
      console.log(this.header);
    });
  },
};
</script>

<style scoped>
* {
  font-family: "Montserrat" !important;
}
.v-btn:not(.v-btn--round).v-size--default[data-v-61dd7a3d] {
  height: 0px !important;
  min-width: 0px !important;
  padding: 0 0px !important;
  background-color: transparent;
}
.v-btn:not(.v-btn--round).v-size--default[data-v-61dd7a3d] {
  height: 0px !important;
  min-width: 0px !important;
  padding: 20px 20px !important;
  background-color: transparent;
}
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: transparent;
  transition: 0.5s ease all;
}
a {
  text-decoration: none;
}
.header-active {
  width: 100% !important;
  background-color: #59c6bc !important;
}
/* .img-logo {
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  transform: translateX(50deg);
  display: flex;
  align-items: center;
  justify-content: center;
} */
/* .img-logo .relative {
  padding: 20px 10px 20px 20px;
  background: transparent;
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
  transition: 0.5s ease all;
} */
/* .img-logo-active {
  width: 100% !important;
  height: 130px !important;
  background-color: #12232e !important;
} */
.btn-group {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
}
.links {
  position: relative;
  z-index: 3;
}
.link {
  text-decoration: none;
  color: white;
  font-size: 20px;
  transition: 0.5s ease all;
}
.link:not(:last-child) {
  margin-right: 50px;
}
.link:hover {
  color: #f5f568;
}
* {
  margin: 0;
  padding: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.v-btn:not(.v-btn--round).v-size--default {
  height: 47px;
  min-width: 100px;
  padding: 0 16px;
  background-color: transparent;
}

.mdi-close::before {
  content: "\F0156";
  margin-right: 5px !important;
}
.v-list--dense .v-list-item .v-list-item__title,
.v-list--dense .v-list-item .v-list-item__subtitle {
  font-size: 0.8125rem;
  font-weight: 500;
  font-size: 20px;
  margin: 10px 15px;
  margin: 1;
}
@media (max-width: 960px) {
  .v-btn:not(.v-btn--round).v-size--default[data-v-61dd7a3d][data-v-61dd7a3d] {
    height: 0px !important;
    min-width: 0px !important;
    padding: 20px 40px !important;
    background-color: transparent;
  }
}
</style>
