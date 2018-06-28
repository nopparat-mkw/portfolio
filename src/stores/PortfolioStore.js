import { observable, computed, action, runInAction } from 'mobx'

class PortfolioStore {
	@observable isFetch = true
    @observable about = null
    @observable educations = []
    @observable employee_training_experience = []
    @observable skills = []
	@observable work_experiences = []

	@action
	findPortfolio = async () => {
		this.isFetch = true
		try {
			const response = await fetch(`https://us-central1-nopparat-portfolio.cloudfunctions.net/portfolio`).then(res => res.json())
			runInAction('entities fetched', () => {
				this.about = response.about
                this.educations = response.educations
                this.employee_training_experience = response.employee_training_experience
                this.skills = response.skills
				this.work_experiences = response.work_experiences
				this.isFetch = false
			});
		} catch (err) {
            this.about = null
            this.educations = []
            this.employee_training_experience = []
            this.skills = []
            this.work_experiences = []
		}
	}

	@computed
	get getIsFetch() {
		return this.isFetch;
	}
	
	@computed
	get getAbout() {
		return this.about;
    }
    
    @computed
	get getEducations() {
		return this.educations;
    }
    
    @computed
	get getEmployeeTrainingExperience() {
		return this.employee_training_experience;
    }
    
    @computed
	get getSkills() {
		return this.skills;
    }

    @computed
	get getWorkExperiences() {
		return this.work_experiences;
	}
}

export default new PortfolioStore()
