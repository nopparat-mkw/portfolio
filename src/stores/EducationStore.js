import { observable, computed } from 'mobx'

class EducationStore {
	@observable educations = [
		{
			id: 1,
			university: "MAEJO UNIVERSITY",
			major: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
			year: "2010 - 2015"
		},
		{
			id: 2,
			university: "PHRAE TECHNICAL COLLEGE",
			major: "CERTIFICATE OF VOCATIONAL EDUCATION IN SURVEYING",
			year: "2007 - 2010"
		}
	]

	@computed
	get getEducations() {
		return this.educations;
	}
}

export default new EducationStore()
