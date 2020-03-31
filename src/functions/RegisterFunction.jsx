
import * as FirestoreService from '../services/RealtimeDatabase';
export const checkUsers = (username) => FirestoreService.getUsersLogin().equalTo(username).once('value').then(e => e.val())
export const addUsers = (username, password, firstname, lastname, tel, line, code) => FirestoreService.addUsers(username, password, firstname, lastname, tel, line, code)
