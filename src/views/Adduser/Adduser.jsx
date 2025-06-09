import React, { useState } from 'react'
import './Adduser.css'
import Footer from '../Footer/Footer'
import Homebtn from '../../assets/home-button.png'
import { Link } from 'react-router-dom'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

function Adduser() {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [qualification, setQualification] = useState('');
    const [college, setCollege] = useState('');
    const [position, setPosition] = useState('');
    const [skills, setSkills] = useState('');
    const [joiningDate, setJoiningDate] = useState('');
    const [mode, setMode] = useState('Work From Home');

    
    const addIntern = async (e) => {
        try {
            if (!id || !name || !age || !qualification || !college || !position || !skills || !joiningDate) {
                toast.error('Please fill all the fields');
                return;
            }
        }
        catch (error) {
            console.error('Error while adding intern:', error);
            toast.error('Error while adding intern. Please try again later.');
            return;
        }
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/interns`, {
                id: id,
                name: name,
                age: age,
                qualification: qualification,
                college: college,
                position: position,
                skills: skills,
                startDate: joiningDate,
                isRemote: mode === 'Work From Home' ? true : false,
            
            });

            setId('');
            setName('');
            setAge('');
            setQualification('');
            setCollege('');
            setPosition('');
            setSkills('');
            setJoiningDate('');
            setMode('Work From Home');
            toast.success('Intern added successfully!');
            console.log('Intern added successfully:', response.data);
        }
        catch (error) {
            console.error('This Id is already exist:', error);
            toast.error('This Id is already exist. Please try with another Id.');
            setId('');
            setName('');
            setAge('');
            setQualification('');
            setCollege('');
            setPosition('');
            setSkills('');
            setJoiningDate('');
            setMode('Work From Home');
            return;
        }
    }

    return (
        <div>
            <h1 className='header'>Add Intern</h1>
            <p className='sub-header'>Please fill the details below to add an intern.</p>
            <div className='input-container'>
                <input
                    type='text'
                    placeholder='Enter Id'
                    className='user-input'
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Name'
                    className='user-input'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Age'
                    className='user-input'
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Qualification'
                    className='user-input'
                    value={qualification}
                    onChange={(e) => setQualification(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='College'
                    className='user-input'
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Position'
                    className='user-input'
                    value={position}
                    onChange={(e) => setPosition(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Skills'
                    className='user-input'
                    value={skills}
                    onChange={(e) => setSkills(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='Joining Date'
                    className='user-input'
                    value={joiningDate}
                    onChange={(e) => setJoiningDate(e.target.value)}
                />
                <select className='select-mode' value={mode} onChange={(e) => setMode(e.target.value)}>
                    <option>Work From Home</option>
                    <option>Work From Office</option>
                </select>
            </div>
            <button type='btn' className='btn-add'
                onClick={() => {
                    addIntern();
                }}  >Add</button>

            <Link to='/'>
                <img src={Homebtn} className='add-intern' alt='Add Intern' />
            </Link>

            <Footer />
            <Toaster/>
        </div>
    )
}

export default Adduser