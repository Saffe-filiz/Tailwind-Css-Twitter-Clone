import { createStore } from 'vuex'

const store = createStore({
	state: {
		test: ['a', 'b,', 'b']
	}
})


export default store