import fetch from 'unfetch';

const checkStatus = response => {

    // If Response Is Success
    if (response.ok) {
        return response;
    }

    // If We Get Any Other Response Than 2xx Then Convert To Error
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllStudents = () =>
    fetch("http://localhost:8080/api/v1/students")
        .then(checkStatus);