import React, { useState, useEffect } from 'react';
import api from '../api/api.config';

const AllJobs = () => {

    const [jobs, setJobs] = useState([]);

    const getAllJobs = async() =>{
        try {
            const result = await api.get("/vagas")
            console.log(result);
        } catch (error) {
            console.error(error.response)
        }
    }

    return(
        <div>AllJobs</div>
    )
}

export default AllJobs;