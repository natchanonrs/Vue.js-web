import Api from '@/services/Api'

export default {
  readall () {
    return Api().get('employees')
  },
  create (credentials) {
    return Api().post('employees', credentials)
  },
  delete (name) {
    return Api().delete(`employees/${name}`)
  },
  update (params) {
    return Api().put(`employees/${params.name}`, params)
  }
}
