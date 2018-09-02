<!-- src/components/Home.vue -->
<template>
  <div>
    <h1>Employees</h1>
    <!--  <input
      type="text"
      name="param"
      v-model="param"
      placeholder="param" />
    <button @click="search">Search</button>-->
    <input type="text" id="searchInput" v-on:keyup="searchFunction ()" placeholder="Search">
    <p/>
    <table id="myTable">
      <tr>
        <th>
          <a v-on:click="sortTable(0)">
            <span class="glyphicon glyphicon-sort align-right"></span>
          </a>
          Name
        </th>
        <th>
          <a v-on:click="sortTable(1)">
            <span class="glyphicon glyphicon-sort align-right"></span>
          </a>
          Address
        </th>
        <th>
          <a v-on:click="sortTable(2)">
            <span class="glyphicon glyphicon-sort align-right"></span>
          </a>
          Phone
        </th>
        <th>
          <a v-on:click="sortTable(3)">
            <span class="glyphicon glyphicon-sort align-right"></span>
          </a>
          Email
        </th>
        <th>
          <a v-on:click="sortTable(4)">
            <span class="glyphicon glyphicon-sort align-right"></span>
          </a>
          Job
        </th>
        <th>
          <a v-on:click="sortTable(5)">
            <span class="glyphicon glyphicon-sort align-right"></span>
          </a>
          Salary
        </th>
      </tr>
      <tr v-for="employee in employees"
        :key="employee.name">
        <td>{{employee.name}}</td>
        <td>{{employee.address}}</td>
        <td>{{employee.phone}}</td>
        <td>{{employee.email}}</td>
        <td>{{employee.job}}</td>
        <td>{{employee.salary}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import ReadService from '@/services/ReadService'
export default {
  data () {
    return {
      employees: null,
      param: ''
    }
  },
  async mounted () {
    const response = await ReadService.readall()
    console.log(response.data)
    this.employees = response.data
  },
  methods: {
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
        for (i = 1; i < (rows.length - 1); i++) {
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
