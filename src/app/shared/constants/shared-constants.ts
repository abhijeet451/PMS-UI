export const CONSTANT = {
	role:'',
	routes: {
		auth: {
			login: '/auth/login',
			register: '/auth/register',
			forgotPassword: '/auth/forgot-password',
			resetPassword: '/auth/reset-password'
		},

		user: {
			dashboard: '/user/dashboard',
			profile: '/user/profile',
			changePassword: 'change-password',
			//allergy: '/user/patient/allergy',

			admin:{
				dashboard: '/user/admin/dashboard',
				profile: '/user/admin/profile',
				changePassword: 'admin/change-password',
				user: '/user/admin/user',
				allergy:'/user/admin/allergy',
				diagnosis:'/user/admin/diagnosis',
				mediaction:'/user/admin/medication'
			},

			physician:{
				dashboard: '/user/physician/dashboard',
				profile: '/user/physician/profile',
				changePassword: 'physician/change-password'
			},

			nurse:{
				dashboard: '/user/nurse/dashboard',
				profile: '/user/nurse/profile',
				changePassword: 'nurse/change-password'
			},

			patient:{
				dashboard: '/user/patient/dashboard',
				profile: '/user/patient/profile',
				changePassword: 'patient/change-password',
				allergy: '/user/patient/allergy',
				demographic:'/user/patient/demographic',
				appointments:'/user/patient/appointment'
			}
		}
	}
}