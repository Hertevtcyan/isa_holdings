<template>
    <div class="flex container justify-between mx-auto">
        <CustomersMap/>
        <CustomersEmail/>
    </div>
</template>

<script>
import CustomersMap from './CustomersModules/CustomersMap.vue'
import CustomersEmail from './CustomersModules/CustomersEmail.vue'
export default {
    components: {
        CustomersEmail,
        CustomersMap
    }
}
</script>
