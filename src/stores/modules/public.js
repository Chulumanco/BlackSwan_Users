/* eslint-disable no-unused-vars */
import axios from "axios";

export default {
    state: {},
    getters: {},
    mutations: {},
    actions: {
        ADD_MESSAGE: ({ commit }, {  name, surname, phone, email, message,user }) => {
            return new Promise((resolve, reject) => {
                axios
                    .post(`contacts`, {

                        name,
                        surname,
                        phone,
                        email,
                        message,
                        user
                    })
                    .then(({ data, status }) => {
                        if (status === 201) {
                            resolve(true);
                        }
                    })
                    .catch(error => {
                        reject(error);
                    });
            });
     } },
    
}
