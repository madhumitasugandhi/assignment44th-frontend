import React, { useState, useEffect } from 'react';
import './Edit.css';
import Footer from '../Footer/Footer';
import Homebtn from '../../assets/home-button.png';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Edituser() {
    const [intern, setInterns] = useState({
        id: '',
        name: '',
        age: '',
        qualification: '',
        college: '',
        position: '',
        skills: '',
        joiningDate: '',
        mode: 'Work From Home'
    });

    const { id } = useParams();

    const loadInternDetail = async () => {
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/interns/${id}`);
                setInterns(response.data.data);
    };

    useEffect(() => {
        loadInternDetail();
    }, [id]);

   const updateIntern = async () => {
    const { id, name, age, qualification, college, position, skills, joiningDate, mode } = intern;

    if (!id || !name || !age || !qualification || !college || !position || !skills || !joiningDate) {
        toast.error('Please fill all the fields');
        return;
    }

    try {
        const response = await axios.put(`${import.meta.env.VITE_API_URL}/interns/${id}`, {
            name: name,
            age: age,
            qualification: qualification,
            college: college,
            position: position,
            skills: skills,
            startDate: joiningDate,
            isRemote: mode === 'Work From Home'
        });

        toast.success('Intern updated successfully!');
    } catch (error) {
        console.error('Error updating intern:', error);
        toast.error('Failed to update intern. Please try again.');
    }
};


    return (
        <div>
            <h1 className='header'>Edit Details</h1>
            <div className='input-container'>
                <input
                    type='text'
                    placeholder='Enter Id'
                    className='user-input'
                    value={intern.id}
                    onChange={(e) => setInterns({ ...intern, id: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Name'
                    className='user-input'
                    value={intern.name}
                    onChange={(e) => setInterns({ ...intern, name: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Age'
                    className='user-input'
                    value={intern.age}
                    onChange={(e) => setInterns({ ...intern, age: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Qualification'
                    className='user-input'
                    value={intern.qualification}
                    onChange={(e) => setInterns({ ...intern, qualification: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='College'
                    className='user-input'
                    value={intern.college}
                    onChange={(e) => setInterns({ ...intern, college: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Position'
                    className='user-input'
                    value={intern.position}
                    onChange={(e) => setInterns({ ...intern, position: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Skills'
                    className='user-input'
                    value={intern.skills}
                    onChange={(e) => setInterns({ ...intern, skills: e.target.value })}
                />
                <input
                    type='text'
                    placeholder='Joining Date'
                    className='user-input'
                    value={intern.joiningDate}
                    onChange={(e) => setInterns({ ...intern, joiningDate: e.target.value })}
                />
                <select
                    className='select-mode'
                    value={intern.mode}
                    onChange={(e) => setInterns({ ...intern, mode: e.target.value })}
                >
                    <option>Work From Home</option>
                    <option>Work From Office</option>
                </select>
            </div>

            <button type='button' className='btn-add' onClick={() => {updateIntern();}}>
                Update
            </button>

            <Link to='/'>
                <img src={Homebtn} className='add-intern' alt='Go to Home' />
            </Link>

            <Footer />
            <Toaster />
        </div>
    );
}

export default Edituser;
