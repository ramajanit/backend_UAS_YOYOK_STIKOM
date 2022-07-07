import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const [outlet, setOutlet] = useState("");
  const [liter, setLiter] = useState("");
  const [warna, setWarna] = useState("");
  const [petugas, setPetugas] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        outlet,
        liter,
        warna,
        petugas,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setOutlet(response.data.outlet);
    setLiter(response.data.liter);
    setWarna(response.data.warna);
    setPetugas(response.data.petugas);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
            <label className="label">Outlet</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={outlet}
                onChange={(e) => setOutlet(e.target.value)}
                placeholder="Outlet"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Volume (lt)</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={liter}
                onChange={(e) => setLiter(e.target.value)}
                placeholder="Liter"
              />
               </div>
          </div>
          <div className="field">
            <label className="label">Warna</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={warna}
                onChange={(e) => setWarna(e.target.value)}
                placeholder="Warna"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Petugas</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={petugas}
                onChange={(e) => setPetugas(e.target.value)}
                placeholder="Petugas"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
