<template>
  <div>
    <div class="flex justify-items-center 100w">
      <Nav currentPage="contact"></Nav>
    </div>
    <div class="text-align-center w100 mt200">
      <address>
        <div><a :href="`tel:${contact.phone}`">{{ contact.phone | formatphone}}</a></div>
        <div><a :href="`mailto:${contact.mail}`">{{ contact.mail  }}</a></div>
      </address>
      <div class="mt20">
        <div><a :href="contact.fb">FACEBOOK*</a></div>
        <div class="mt5"><a :href="contact.ig">INSTAGRAM*</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";
import { contact } from "../store";

export default {
  name: "Contact",
  components: { Nav },
  filters: {
    formatphone(phone) {
      if(phone.length === 9) {
        return `+420 ${phone.substring(0, 3)} ${phone.substring(3, 6)} ${phone.substring(6, 9)}`;
      }
      return phone
    }
  },
  metaInfo: {
    title: "Contact | Lune storm"
  },
  data() {
    return {
      contact
    };
  }

};
</script>

<style scoped>

</style>
