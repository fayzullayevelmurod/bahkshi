<template>
  <div>
    <Home />
    <About />
    <Teachers />
    <MusicGroup />
    <Signup />
    <StudentBand />
  </div>
</template>

<script>
import Home from "@/components/Home";
import About from "@/components/About";
import Teachers from "@/components/Teachers";
import MusicGroup from "@/components/MusicGroup";
import Signup from "@/components/Signup";
import StudentBand from "@/components/StudentBand";

export default {
  name: "DefaultViews",

  components: {
    Home,
    About,
    Teachers,
    MusicGroup,
    Signup,
    StudentBand,
},
};
</script>
