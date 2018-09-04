<template>
  <div>
    <h1>Add</h1>
    <div class="col-lg-12">
      <div class="row">
        NAME
      </div>
      <div class="row">
        <input
          type="text"
          name="name"
          v-model="name"
          placeholder="Name" />
      </div>
      <div class="row">
        ADDRESS
      </div>
      <div class="row">
        <input
          type="text"
          name="address"
          v-model="address"
          placeholder="Address" />
      </div>
      <div class="row">
        PHONE
      </div>
      <div class="row">
        <input
          type="tel"
          name="phone"
          v-model="phone"
          placeholder="Phone" />
      </div>
      <div class="row">
        E-MAIL
      </div>
      <div class="row">
        <input
          type="email"
          name="email"
          v-model="email"
          placeholder="Email" />
      </div>
      <div class="row">
        JOB
      </div>
      <div class="row">
        <input
          type="text"
          name="job"
          v-model="job"
          placeholder="Job" />
      </div>
      <div class="row">
        SALARY
      </div>
      <div class="row">
        <input
          type="number"
          name="salary"
          v-model="salary"
          placeholder="Salary" />
      </div>
      <div class="row">
        <br>
        <button @click="add">Add</button>
      </div>
    </div>
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
      this.$router.push({name: 'Home'})
    }
  }
}
</script>
