
import * as FirestoreService from '../services/RealtimeDatabase';
import Swal from 'sweetalert2'
import passwordHash from "password-hash"

export const onSubmitLogin = (username, password) => FirestoreService.getUsersLogin().equalTo(username).on('value', async function (data) {

    if (data.val()) {
        data.forEach(async e => {
            if (passwordHash.verify(password, e.val().password)) {
                if (e.val().status === 'active') {
                    window.location.href = 'home'
                    sessionStorage.setItem('user_login_db', e.val()._key)
                } else {
                    Swal.fire(
                        'Login false!',
                        'username / ผุ้ใช้งานนี้ถูก Block',
                        'warning'
                    ).then(() => window.location.reload())
                }
            } else {
                Swal.fire(
                    'Login false!',
                    'users หรือ password',
                    'warning'
                ).then(() => window.location.reload())
            }
        })
    } else {
        Swal.fire(
            'Login false!',
            'users หรือ password',
            'warning'
        ).then(() => window.location.reload())
    }
});