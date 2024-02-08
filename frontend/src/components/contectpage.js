import React, { useState } from "react";
import Axios from "axios";

export default function Contectme() {
  const [name, setName] = useState("");
  const [number, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setPassword] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:1807/signIn", { name, number, email, comment })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="contect-main">
        <div className="contect-color-1"></div>
        <div className="contect-color-2">
          <div className="contect-main-empty">
            <div className="contect-empty-1"></div>
            <div className="contect-empty-2"></div>
          </div>
          <div className="contect-page">
            <div className="contect-detail">
              <form action="/signIn" method="post">
                  <label className="contect-main-heading">Contect Me</label>
                <div className="name">
                  <label>Name: </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="age">
                  <label>number: </label>
                  <input
                    type="number"
                    name="age"
                    value={number}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="email">
                  <label>email: </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="password">
                  <label>comment: </label>
                  <input
                    type="text"
                    name="password"
                    value={comment}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button onClick={submitData}>Submit Now</button>
              </form>
            </div>
          </div>
        </div>
        <div className="contect-color-3"></div>
      </div>
    </>
  );
}
