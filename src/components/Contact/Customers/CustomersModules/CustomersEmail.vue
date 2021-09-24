<template>
  <div class="my-container">
    <div class="phone flex">
      <img src="@/assets/icons/phone.svg" alt="" />
      <p>+97142929129</p>
    </div>
    <div class="massage">
      <h2>Send us a message</h2>
      <div class="line"></div>
    </div>
    <form class="contact-form" @submit.prevent="sendEmail">
      <input
        v-model="name"
        :class="{ inputempty: nameVerify }"
        class="input"
        placeholder="Your Name"
        type="text"
        name="name"
      />
      <input
        v-model="type"
        class="input"
        placeholder="Type of enquiry"
        type="text"
      />
      <input
        v-model="email"
        class="input"
        placeholder="Your Email"
        type="email"
      />
      <input
        v-model="message"
        class="input"
        placeholder="Message"
        type="text"
      />
      <input
        v-model="number"
        class="input"
        placeholder="Mobile Number"
        type="tel"
      />

      <input type="submit" value="Send" class="btn-send" />
    </form>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
export default {
  data() {
    return {
      name: "",
      type: "",
      email: "",
      message: "",
      number: "",

      nameVerify: false,
    };
  },
  methods: {
    sendEmail(e) {
      emailjs
        .sendForm(
          "service_vtvx1q9",
          "template_5z1uvpj",
          e.target,
          "user_qsRzUsXv6FPsfCNumOJxy"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
  },
};
</script>

<style scoped lang="scss">
.my-container {
  //   border: 1px solid;
  width: 593px;
  .phone {
    p {
      font-family: Rubik;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 21px;
      letter-spacing: 0.1em;
      color: #c1121f;
      margin-left: 8px;
    }
  }
  .massage {
    margin-top: 26px;
    h2 {
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 56px;
      line-height: 32px;
      color: #1d3557;
      text-shadow: 2px 4px 0px rgba(29, 53, 87, 0.05);
    }
    .line {
      width: 157px;
      height: 4px;
      margin-top: 48px;

      background: #c1121f;
    }
  }
  .contact-form {
    width: 100%;
    .input {
      width: 100%;
      border-bottom: 1px solid #10223d;
      margin-top: 55px;
      opacity: 0.5;
      box-shadow: 4px 4px 20px rgba(29, 53, 87, 0.1);
      padding-bottom: 15px;
    }
    p {
      margin-top: 24px;
      font-family: Rubik;
      font-style: normal;
      font-weight: 300;
      font-size: 18px;
      line-height: 32px;
      color: #1d3557;
    }
    .btn-send {
      width: 184px;
      height: 73px;
      background: #c1121f;
      backdrop-filter: blur(1px);
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      color: #fff;
      margin-top: 10%;
    }
    .inputempty {
      border-bottom: 1px solid red;
    }
  }
}
@media screen and (max-width: 1279px) {
  .my-container {
    width: 400px;
    .massage {
      h2 {
        font-size: 52px;
        line-height: 21px;
      }
    }
  }
}
@media screen and (max-width: 1024px){
    .my-container{
    width: 328px;
    .massage {
      h2 {
        font-size: 35px;
        line-height: 5px;
      }
    }
    }
}
@media screen and (max-width: 767px){
  .my-container{
    width: 100%;
    margin-top: 33px;
    }
}
</style>