<template>
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li v-for="(item, index) in filteredBreadcrumbs" 
          :key="index" 
          class="breadcrumb-item"
          :class="{ 'active': index === filteredBreadcrumbs.length - 1 }">
        <a v-if="index < filteredBreadcrumbs.length - 1" 
           :href="item.path">{{ item.name }}</a>
        <span v-else>{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: {
    breadcrumbs: {
      type: Array,
      required: true
    }
  },
  computed: {
    filteredBreadcrumbs() {
      return this.breadcrumbs.filter(item => 
        item.name !== '首頁' && item.name !== '建材分類'
      );
    }
  }
}
</script>
