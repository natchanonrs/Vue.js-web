<template>
  <div>
    <h1>Employees</h1>
    <input type="text" id="searchInput" v-on:keyup="searchFunction ()" placeholder="Search">
    <p/>
    <div class="row">
      <a v-on:click="navigateTo({ name: 'Add'})">
        <span class="glyphicon glyphicon-plus"></span>
      </a>
    </div>
    <p/>
    <div class="row">
      <table id="myTable">
        <th>
          <a v-on:click="sortTable(0)">
            <span class="glyphicon glyphicon-sort"></span>
          </a>
          Name
        </th>
        <th>
          <a v-on:click="sortTable(1)">
            <span class="glyphicon glyphicon-sort"></span>
          </a>
          Address
        </th>
        <th>
          <a v-on:click="sortTable(2)">
            <span class="glyphicon glyphicon-sort"></span>
          </a>
          Phone
        </th>
        <th>
          <a v-on:click="sortTable(3)">
            <span class="glyphicon glyphicon-sort"></span>
          </a>
          Email
        </th>
        <th>
          <a v-on:click="sortTable(4)">
            <span class="glyphicon glyphicon-sort"></span>
          </a>
          Job
        </th>
        <th>
          <a v-on:click="sortTable(5)">
            <span class="glyphicon glyphicon-sort"></span>
          </a>
          Salary
        </th>
        <tr v-for="employee in employees"
          :key="employee.name" v-on:click="navigateTo({
            name: 'Employee',
            params: {
              id: employee._id,
              name: employee.name,
              address: employee.address,
              phone: employee.phone,
              email: employee.email,
              job: employee.job,
              salary: employee.salary
            }
          })">
          <td>{{employee.name}}</td>
          <td>{{employee.address}}</td>
          <td>{{employee.phone}}</td>
          <td>{{employee.email}}</td>
          <td>{{employee.job}}</td>
          <td>{{employee.salary}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import CRUDService from '@/services/CRUDService'
export default {
  data () {
    return {
      employees: null,
      param: ''
    }
  },
  async mounted () {
    const response = await CRUDService.readall()
    console.log(response.data)
    this.employees = response.data
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    },
    searchFunction () {
      var input, filter, table, tr, td, i, j
      input = document.getElementById('searchInput')
      filter = input.value.toUpperCase()
      table = document.getElementById('myTable')
      tr = table.getElementsByTagName('tr')
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')
        for (j = 0; j < td.length; j++) {
          if (td[j]) {
            if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
              tr[i].style.display = ''
              break
            } else {
              tr[i].style.display = 'none'
            }
          }
        }
      }
    },
    sortTable (index) {
      var table, rows, switching, i, x, y, shouldSwitch
      table = document.getElementById('myTable')
      switching = true
      while (switching) {
        switching = false
        rows = table.rows
        for (i = 0; i < (rows.length - 1); i++) {
          shouldSwitch = false
          x = rows[i].getElementsByTagName('TD')[index]
          y = rows[i + 1].getElementsByTagName('TD')[index]
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true
            break
          }
        }
        if (shouldSwitch) {
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
          switching = true
        }
      }
    }
  }

}
</script>
