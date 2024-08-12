<template>
    <section>
        Filter
    </section>
    <section>
        <base-card>
            <div class="controls">
                <base-button mode="outline">Refresh</base-button>
                <base-button link to="/register">Register as Coach</base-button>
            </div>
            <ul v-if="hasCoaches">
                <coach-item v-for="coach in filtersCoaches" 
                    :key="coach.id" 
                    :first-name="coach.firstName" 
                    :last-name="coach.lastName" 
                    :rate="coach.hourlyRate"
                    :description="coach.description"
                    :areas="coach.areas">
                </coach-item>
            </ul>
            <h3 v-else>No coaches</h3>
        </base-card>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue'
export default {
  components: { CoachItem },
    computed : {
        filtersCoaches() {
            return this.$store.getters['coaches/coaches']
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        }
    }
}
</script>

<style scoped>
    ul {
    list-style: none;
    margin: 0;
    padding: 0;
    }

    .controls {
    display: flex;
    justify-content: space-between;
    }
</style>