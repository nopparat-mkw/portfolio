import { observable, computed } from 'mobx'

class NavigatorStore {
	@observable navigators = [
		{ title: 'About', tabIndex: 0 },
		{ title: 'Skill', tabIndex: 1 },
		{ title: 'Work Experience', tabIndex: 2 },
		{ title: 'Education', tabIndex: 3 },
	]

	@computed
	get getNavigators() {
		return this.navigators;
	}
}

export default new NavigatorStore()
