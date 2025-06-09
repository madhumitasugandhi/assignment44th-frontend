import { useNavigate } from "react-router-dom"
import "./InternCard.css"
import axios from "axios";


function InternCard({ id, name, age, qualification, college, position, skills, startDate }) {

    const navigate = useNavigate();

    const deleteIntern = async(id)=>{
        const response = await axios.delete(`http://localhost:5000/interns/${id}`);
        window.location.reload();
    }

    return (
        <div className='intern-card' onClick={(e)=>{
            navigate(`/about/${id}`);
        }}>

            <h2 className="name"> {name}</h2>
            <div className="basic-detail">
                <p ><b>ID: </b>{id}</p>
                <br />
            </div>
            <div className="del-edit-btn">
            <span>
                <button type="button" className="btn-delete" onClick={(e) => {e.stopPropagation(); 
                    deleteIntern(id);
                }}>Delete</button>
            </span>
            <span>
                <button type="button" className="btn-edit" onClick={(e) => {e.stopPropagation(); 
                navigate(`/edit/${id}`);
                }}>Edit</button>
            </span>
            </div>
        </div>

    )
}

export default InternCard



