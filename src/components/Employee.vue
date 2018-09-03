<template>
  <div>
    <h1>Employee</h1>
    <input
      type="text"
      name="name"
      v-model="name"
      placeholder="Name" />
    <input
      type="text"
      name="address"
      v-model="address"
      placeholder="Address" />
     <input
      type="tel"
      name="phone"
      v-model="phone"
      placeholder="Phone" />
     <input
      type="email"
      name="email"
      v-model="email"
      placeholder="Email" />
    <input
      type="text"
      name="job"
      v-model="job"
      placeholder="Job" />
    <input
      type="number"
      name="salary"
      v-model="salary"
      placeholder="Salary" />
    <p/>
    <button @click="update">Update</button>
    <button @click="del">Delete</button>
    <p/>
  </div>
</template>

<script>
import CRUDService from '@/services/CRUDService'
export default {
  async mounted () {
    this.name = this.$route.params.name
    this.address = this.$route.params.address
    this.phone = this.$route.params.phone
    this.email = this.$route.params.email
    this.job = this.$route.params.job
    this.salary = this.$route.params.salary
  },
  data () {
    return {
      name: '',
      address: '',
      phone: '',
      email: '',
      job: '',
      salary: ''
    }
  },
  methods: {
    async del () {
      const response = await CRUDService.delete(this.name)
      console.log(response.data)
      this.$router.push({name: 'Home'})
    },
    async update () {
      const response = await CRUDService.update(
        {
          name: this.name,
          address: this.address,
          phone: this.phone,
          email: this.email,
          job: this.job,
          salary: this.salary
        }
      )
      console.log(response.data)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
