import Api from '@/services/Api'

export default {
  readall () {
    return Api().get('employees')
  },
  create (credentials) {
    return Api().post('employees', credentials)
  },
  delete (id) {
    return Api().delete(`employees/${id}`)
  },
  update (id, params) {
    return Api().put(`employees/${id}`, params)
  }
}
