import { createStore } from 'vuex';
import coachModules from './modules/coaches/index.js';

const store = createStore({
    modules : {
        coaches : coachModules
    }
})

export default store