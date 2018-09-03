<template>
  <div>
    <h1>Add</h1>
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
    <button @click="add">Add</button>
    <p/>
  </div>
</template>

<script>
import CRUDService from '@/services/CRUDService'
export default {
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
    async add () {
      const response = await CRUDService.create({
        name: this.name,
        address: this.address,
        phone: this.phone,
        email: this.email,
        job: this.job,
        salary: this.salary
      })
      console.log(response.data)
    }
  }
}
</script>
