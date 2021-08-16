import axios from 'axios'
import setAlert from './alert'

import { PROFILE_ERROR, GET_PROFILE, UPDATE_PROFILE, CLEAR_PROFILE, LOGOUT} from './types'

// get current user profile
export const getCurrentProfile = () => async dispatch => {

    try {
        const res = await axios.get('api/profile/me')

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

    } catch (err) {

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
        
    }
}

// Creates or updates profile
export const createProfile = (formData, edit = false) => async dispatch => {
    try {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        const res = await axios.post('/api/profile', formData, config)

        dispatch({
            type: GET_PROFILE,
            payload: res.data
        })

        dispatch(setAlert(edit ? 'profile updated': 'profile has been updated'))

    } catch (err) {

        const errors = err.response.data.errors

            if(errors){
                errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
            }

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}

// Add Experience
export const addExperience = (formData) => async (dispatch) => {
    try {
      const res = await axios.put('api/profile/experience', formData);
  
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
      dispatch(setAlert('Experience Added', 'success'));
  
    } catch (err) {
    
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
      
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };
  
  // Add Education
  export const addEducation = (formData) => async (dispatch) => {
    try {
      const res = await axios.put('api/profile/education', formData);
  
      dispatch({
        type: UPDATE_PROFILE,
        payload: res.data
      });
  
      dispatch(setAlert('Education Added', 'success'));

    } catch (err) {
    
      const errors = err.response.data.errors;
  
      if (errors) {
        errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
      }
  
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  };

  // Delete experience
export const deleteExperience = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`api/profile/experience/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(getCurrentProfile())
    dispatch(setAlert('Experience Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete education
export const deleteEducation = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`api/profile/education/${id}`);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });
    dispatch(getCurrentProfile())
    dispatch(setAlert('Education Removed', 'success'));
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Delete account & profile
export const deleteAccount = () => async (dispatch) => {
  if (window.confirm('Are you sure? This can NOT be undone!')) {
    try {
      await axios.delete('api/profile');

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: LOGOUT });

      dispatch(setAlert('Your account has been permanently deleted'));
    } catch (err) {
      dispatch({
        type: PROFILE_ERROR,
        payload: { msg: err.response.statusText, status: err.response.status }
      });
    }
  }
};
  