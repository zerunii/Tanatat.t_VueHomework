<template>
  <div :style="{'background-image':'url(https://images.alphacoders.com/666/666093.png)'}">
    <h1>Profile</h1>
    <img src="@/assets/mobile-suit-gundam-japanese-anime-wallpaper-preview.jpg" width="" height="250" />
    <p>
      Name: {{ portfolio.name }} <br />
      Nickname: {{ portfolio.nickname }} <br />
      interest: {{portfolio.interest}} <br />
      skill: {{ portfolio.skill }} <br />
      soft skill:{{ portfolio.soft_skill }} <br />
    </p>
    <p>
      <button @click="goContact()">
        <img src="@/assets/free-contact-icon-3018-thumb.png"
          width="40" height="40"
        />
      </button>
    </p>
  </div>
</template>
<style>
p {
  text-align: center;
  font-size: 15px;
}
div {
  text-align: center;
}
</style>

<script>
export default {
  data: () => ({
    portfolio: {
      name: "ธนทัต ชูศรี",
      nickname: "ทัต",
      skill: "C# JAVA Rstudio SQL Networking",
      interest:"Gundam Gunpla builing",
      soft_skill:
        "ขับรถเป็น เรียนรู้ได้เหมือนคนปกติ พูดภาษาอังกฤษได้ TOEIC 650 คะแนน ",
    },
  }),
  methods: {
    goContact() {
      this.$router.push("/contact");
    },
  },
};
</script> 