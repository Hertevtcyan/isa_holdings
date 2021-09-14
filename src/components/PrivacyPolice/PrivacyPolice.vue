<template>
  <div>
      <ShowPathPage :page="{path: 'Privacy Police', showIcon: false, section: ''}"/>
    <div class="container mx-auto my-container">
      <TextRedLine
        v-for="(data, index) in content"
        :key="index"
        v-bind="data"
      />
    </div>
  </div>
</template>

<script>
import ShowPathPage from "@/components/ui/ShowPathPage.vue";
import TextRedLine from "@/components/ui/TextRedLine.vue";
export default {
  components: {
    ShowPathPage,
    TextRedLine,
  },
  data: () => ({
    content: [
      {
        subTitle: "Privacy Policy Regarding Customer Information",
        paragraph: `ISA  Group, Inc. ("ISAG") hereby establishes and announces the "Privacy Policy Regarding Customer Information" ("this Policy"), which sets forth ISA's policies for protecting customers' personal information and ISA's basic approach in handling customers' personal information (including the customers' Individual Number and personal information containing the Individual Number (hereafter collectively referred to as "Specific Personal Information, etc.")), applicable to ISA HOLDING Group which is composed of ISAG, its consolidated subsidiaries and affiliates (which are accounted for by the equity method) that are listed in ISAG's Financial Reports.`,
      },
      {
        subTitle: "Policy of Management",
        paragraph:
          'ISA Holding recognizes appropriate protection and use of personal information to be important social responsibilities, and makes every effort to appropriately protect and use personal information complying with laws and regulations including the "Personal Data Protection Law in Turkey ", "Act on the Use of Numbers to Identify a Specific Individual in the Administrative Procedure" and other related regulations and the internal rules of ISA Holding, including this Policy when ISA HOlDING conducts business.',
      },
      {
        subTitle: "Proper Acquisition",
        paragraph:
          "ISA HOLDING will acquire personal information that is necessary to conduct its business by proper and lawful means.",
      },
      {
        subTitle: "Purpose of Use",

        paragraph:
          "ISA HOLDING will specify the purpose of use of personal information and will handle the personal information within the scope necessary to achieve that purpose, and will not use it beyond that scope.",
        paragraph2:
          'In cases where special restrictions exist on the use of particular personal information under laws and/or regulations such as the use of the Individual Number under the "Act on the Use of Numbers to Identify a Specific Individual in the Administrative Procedure", ISA HOLDING will not handle that particular personal information for purposes not relevant to said matters.',
        paragraph3:
          "The purpose of use of personal information is set forth through the web site or other measures provided by each company of the ISA HOLDING.",
      },
      {
        subTitle: "Providing Personal Information to Third Parties",

        paragraph:
          "ISA HOLDING will not provide personal information to any third party in principle unless the individual concerned has agreed to such use or it is authorized by law. However, ISA HOLDING may provide personal information to relevant entities that are otherwise specified without customer consent in following cases:",
        paragraph2:
          "ISA HOLDING entrusts management of personal information that is necessary to achieve the purpose of use to a third party. ISA HOLDING is one of the parties in a consolidation transaction. ISA HOLDING uses personal information jointly with designated entities that are publicly informed.",
        paragraph3: `However, with respect to Specific Personal Information etc., ISA HOLDING  will not provide it to third parties except in cases specified in the "Act on the Use of Numbers to Identify a Specific Individual in the Administrative Procedure".`,
      },
      {
        subTitle: "Comments & Requests",
        paragraph:
          "Mizuho Financial Group will endeavor to cope with customer's comments and requests for the management of personal information sincerely and promptly.",
      },
    ],
  }),
};
</script>

<style scoped>
.my-container {
    margin-top: 112px;
}
</style>










 


