<template>
    <section>
        <coach-filter @change-filter="setFilter">
        </coach-filter>
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
                    :id="coach.id"
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
import CoachFilter from '../../components/coaches/CoachFilter.vue'
export default {
  components: { 
    CoachItem,
    CoachFilter
   },
   data() {
        return {
            activeFilters : {
                frontend : true,
                backend : true,
                career : true
            }
        }
   },
    computed : {
        filtersCoaches() {
            const coaches = this.$store.getters['coaches/coaches'];
            return coaches.filter( coach => {
                if(this.activeFilters.frontend && coach.areas.includes('frontend')) {
                    return true;
                }
                if(this.activeFilters.backend && coach.areas.includes('backend')) {
                    return true;
                }
                if(this.activeFilters.career && coach.areas.includes('career')) {
                    return true;
                }
                return false;
            } )
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        }
    },
    methods : {
        setFilters(updateFilters) {
            this.activeFilters = updateFilters
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