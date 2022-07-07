import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const [outlet, setOutlet] = useState("");
  const [liter, setLiter] = useState("");
  const [warna, setWarna] = useState("");
  const [petugas, setPetugas] = useState("");
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/users", {
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

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
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
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
