<template>
    <li>
        <h3>{{ fullname }}</h3>
        <h4>${{ rate }}/hour</h4>
        <p>{{ description }}</p>
        <div>
            <base-badge v-for="area in areas" :key="area.id" :type="area" :title="area">{{ area }}</base-badge>
        </div>
        <div class="actions">
            <base-button link mode="outline" :to="coachContactLink">Contact</base-button>
            <base-button link :to="coachDetailLink">View detail</base-button>
        </div>
    </li>
</template>

<script>
export default {
    props : ['firstName', 'lastName', 'rate', 'areas', 'description'],
    computed : {
        fullname() {
            return this.firstName + ' ' + this.lastName;
        },
        coachContactLink() {
            return this.$route.path + '/' + this.id + '/contact' // coaches/1/contact;
        },
        coachDetailLink() {
            return this.$route.path + '/' + this.id
        }
    }
}
</script>

<style scoped>
    li {
    margin: 1rem 0;
    border: 1px solid #424242;
    border-radius: 12px;
    padding: 1rem;
    }

    h3 {
    font-size: 1.5rem;
    }

    h3,
    h4 {
    margin: 0.5rem 0;
    }

    div {
    margin: 0.5rem 0;
    }

    .actions {
    display: flex;
    justify-content: flex-end;
    }
</style>