import * as firebase from "firebase/app";
import 'firebase/database'
import passwordHash from "password-hash"

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

export const getUsers = () => {
    return db.ref('tb_user')
};

export const getUsersByKey = (key) => {
    return db.ref('tb_user/' + key).once('value').then(e => {
        return {
            _key: e?.val()?._key,
            username: e?.val()?.username,
            password: e?.val()?.password,
            firstname: e?.val()?.firstname,
            lastname: e?.val()?.lastname,
            tel: e?.val()?.tel,
            line: e?.val()?.line,
            code: e?.val()?.code,
            point: e?.val()?.point,
            role: e?.val()?.role,
            status: e?.val()?.status
        }
    })
};
export const getUsersLogin = () => {
    return db.ref('tb_user').orderByChild('username')
};

export const getUsersLoginList = () => {
    return db.ref('tb_user').orderByChild('username')
};

export const addUsers = (username = '', password = '', firstname = '', lastname = '', tel = '', line = '', code = '') => {
    let newKey = db.ref().child(`tb_user`).push().key;
    let updates = {};
    const list = {
        "_key": newKey,
        "username": username,
        "password": passwordHash.generate(password),
        "firstname": firstname,
        "lastname": lastname,
        "tel": tel,
        "line": line,
        "code": code,
        "point": "0",
        "role": "agent",
        "status": "active"
    }
    updates[`/tb_user/` + newKey] = list;
    return db.ref().update(updates)
};
export const updateUsers = (_key, username = '', password = '', firstname = '', lastname = '', tel = '', line = '', code = '', point = '', role = '', status = '') => {
    let updates = {};
    const list = {
        "_key": _key,
        "username": username,
        "password": password,
        "firstname": firstname,
        "lastname": lastname,
        "tel": tel,
        "line": line,
        "code": code,
        "point": point,
        "role": role,
        "status": status
    }
    updates[`/tb_user/` + _key] = list;
    return db.ref().update(updates)
};

// export const getUsersLogin = (user, pass) => {
//     return db.ref('tb_user')
// };

// export const getTracking = (user, pass) => {
//     return db.ref('tb_check')
// };

// export const getCheckInUsers = (user, pass) => {
//     return db.ref('tb_check').child(localStorage.getItem('login__key'))
// };

// export const setCheckIn = (fetchIP, fetchMACAddress, user = localStorage.getItem('login_username'), pass = localStorage.getItem('login_password')) => {
//     let newKey = db.ref().child(`tb_check/${localStorage.getItem('login__key')}`).push().key;
//     let updates = {};
//     let mac_address = fetchMACAddress;
//     let chkin = moment(moment().format()).add(12, 'hours').format('HH:mm')
//     let chklate = moment('23:30', 'HH:mm').add(12, 'hours').format('HH:mm')
//     let datechkin = moment(chkin, 'HH:mm')
//     let datechklate = moment(chklate, 'HH:mm')
//     let newdate = moment(datechkin).diff(datechklate, 'minutes')
//     let mewtime = newdate >= 60 ? (+(newdate/60).toFixed(2)).toString().replace('.', ' ชั่วโมง ') : newdate
//     const list = {
//         "_key": newKey,
//         "check_in": moment().format(),
//         "check_night_late": newdate,
//         "check_out": "",
//         "check_user": user,
//         "work_list": moment().format('HH') >= 6 && moment().format('HH') <= 18 ? "Morning job" : "Late night",
//         "MAC_ADDRESS": mac_address || '',
//         "IP_ADDRESS": fetchIP || '',
//     }
//     sendLineNotify(
//        moment(list.check_in).format(' LL เวลา HH:mm นาที ')
//         + (localStorage.getItem('login_firstname') + ' ' + localStorage.getItem('login_lastname'))
//         + (list.work_list === "Morning job" ? moment(moment(list.check_in).add(0, 'hours')).diff(moment('11.30', 'HH:mm').add(0, 'hours'), 'minutes') > 0 ? ' กะเช้า สาย ' : ' กะเช้า ตรงเวลา ' : newdate > 0 ? ' เข้างานกะดึก สาย ' + mewtime + ' นาที' : ' เข้างานกะดึก ตรงเวลา ')
//         )
        
//     updates[`/tb_check/${localStorage.getItem('login__key')}/` + newKey] = list;
//     return db.ref().update(updates)
// };

// export const setCheckOut = (e) => {
//     let updates = {};
//     const list = {
//         "_key": e._key,
//         "check_in": e.check_in,
//         "check_out": moment().format(),
//         "check_user": e.check_user,
//         "work_list": e.work_list
//     }
//     updates[`/tb_check/${localStorage.getItem('login__key')}/` + e._key] = list;
//     return db.ref().update(updates)
// };


// export const fetchIP = () => {
//     return fetch('https://api.ipify.org/?format=json').then((e) => e.json()).then(e => (e.ip))
// }

// export const fetchMacAddress = () => {
//     var requestOptions = {
//         method: 'GET',
//         redirect: 'follow'
//     };
//     return fetch("https://work-at-home.herokuapp.com/ ", requestOptions)
//         .then(response => response.text())
//         .then(result => result)
//         .catch(error => error);
// }

// export const sendLineNotify = (list) => {
//     // eslint-disable-next-line
//     fetch("https://work-at-home.herokuapp.com/linenoti?message=" + list)
//         .then(response => response.text())
// }

// export const IP_ADDRESS = () => {
//     return db.ref('tb_ip')
// };
