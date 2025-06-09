import React, { useState, useEffect } from "react";
import './About.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";

function About() {
  const [intern, setIntern] = useState({});
  const { id } = useParams();

  const loadInterDetail = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/interns/${id}`);
      setIntern(response.data.data);
    } catch (error) {
      console.error("Failed to fetch intern data", error);
    }
  };

  useEffect(() => {
    loadInterDetail();
  }, [id]);

  return (
    <div>
      <h1 className="header">TCS InternView</h1>
      <div className="intern-detail-card">
        <h1>{intern?.name}</h1>
        <p>Age: {intern?.age}</p>
        <p>Qualification: {intern?.qualification}</p>
        <p>College: {intern?.college}</p>
        <p>Position: {intern?.position}</p>
        <p>Skills: {intern?.skills}</p>
        <p>Joining Date: {intern?.startDate}</p>
        <p>Mode: {intern?.isRemote ? "Work From Home" : "Work From Office"}</p>
      </div>
      <Footer />
    </div>
  );
}

export default About;
