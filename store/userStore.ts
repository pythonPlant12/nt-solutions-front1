
export const useUserStore = defineStore('userStore', {
  state: () => ({
    firstName: '',
    lastName: '',
    email: '',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    setEmail(email: string) {
      this.email = email
    },
    setUserData(firstName, lastName, email) {
      this.firstName = firstName
      this.lastName = lastName
      this.email = email
    },
  }
})