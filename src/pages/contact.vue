<template>
   <div :style="{'background-image':'url(https://images.alphacoders.com/666/666093.png)'}">
    <h1 class>Contact</h1>
    <p>
      Email: {{ contact.Email }} <br />
      Tel: {{ contact.Tel }} <br />
    </p>
    <p>
    <button @click="Home()">
      <img src="@/assets/home.png"
          width="40" height="40"
        />
    </button>
    </p>
   </div>
</template>
<style>
h1 {
  font-size: 100px;
}
p {
  font-size: 20px;
}
</style>
<script>
export default {
  data: () => ({
    contact: {
      Email: "cu.tanatat_st@tni.ac.th",
      Tel: "0880184612",
    },
  }),
  methods: {
    Home() {
      this.$router.push("/");
    },
  },
};
</script>