import { observable, action, computed } from 'mobx'

class StoreConfig {
	@observable activeIndex = JSON.parse(window.localStorage.getItem("activeTabIndex") || 0)

	@action
	changeTab = tabIndex => {
		window.localStorage.setItem("activeTabIndex", JSON.stringify(tabIndex))
		this.activeIndex = tabIndex;
	};

	@computed
	get currentActiveIndex() {
		return this.activeIndex;
	}
}

const store = window.store = new StoreConfig();

export default store
