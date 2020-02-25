import { ADD_USER, FETCH_USER } from './types';
import axios from 'axios';

const apiUrl = 'https://stormy-dawn-79363.herokuapp.com';

export const addUser = (data) => {
    return (dispatch) => {
        const payload = {
            user: {
                name: data.name,
                email: data.email,
                location_id: data.location_id
            }
        };

        return axios.post(`${apiUrl}/users`, payload)
            .then(response => {
                dispatch(createUserSuccess(response.data.data));
            }).catch(error => {
                throw(error);
            });
    }
}

export const createUserSuccess = (data) => {
    return {
        type: ADD_USER,
        payload: {
            id: data.id,
            attributes: {
                name: data.attributes.name,
                email: data.attributes.email,
                city: data.attributes.city,
            }
        }
    }
};


export const fetchUsers = (users) => {
    return {
        type: FETCH_USER,
        users
    }
};

export const fetchAllUsers = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}/users`)
            .then(response => {
                dispatch(fetchUsers(response.data.data))
            }).catch(error => {
                throw(error);
            });
    };
};

export const fetchAllLocations = () => {
    return axios.get(`${apiUrl}/locations`);
};