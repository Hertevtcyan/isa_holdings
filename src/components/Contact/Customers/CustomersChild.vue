<template>
  <div>
    <div class="container mx-auto customer_text">
      <h1>
        The best way for our customers to contact us is usually through one of
        our global businesses. Select from the options below to find the most
        suitable contact for you.
      </h1>
    </div>
    <div class="my-cont flex container justify-between mx-auto">
      <CustomersMap />
      <CustomersEmail />
    </div>
  </div>
</template>

<script>
import CustomersMap from "./CustomersModules/CustomersMap.vue";
import CustomersEmail from "./CustomersModules/CustomersEmail.vue";
export default {
  components: {
    CustomersEmail,
    CustomersMap,
  },
};
</script>

<style scoped>
.customer_text h1 {
  font-family: Rubik;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: #1d3557;
  margin-top: 16px;
  margin-bottom: 66px;
  width: 57%;
}
@media screen and (max-width: 767px) {
  .my-cont {
    flex-direction: column;
  }
}
</style>
