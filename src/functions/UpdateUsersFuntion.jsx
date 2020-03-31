
import * as FirestoreService from '../services/RealtimeDatabase';

export const updateUsersByKey = (_key, username, password, firstname, lastname, tel, line, code, point, role, status) => FirestoreService.updateUsers(_key, username, password, firstname, lastname, tel, line, code, point, role, status)