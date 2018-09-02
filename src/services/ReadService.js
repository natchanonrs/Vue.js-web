import Api from '@/services/Api'

export default {
  readall () {
    return Api().get('employees')
  }
}
