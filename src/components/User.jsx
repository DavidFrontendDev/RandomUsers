import React from "react";

function User({ email, name, picture, phone }) {
  return (
    <article className="card mb-3 w-75 shadow-xl" style={{ maxWidth: "540px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={picture}
            className="img-fluid rounded-start"
            alt="a photo of a random guy "
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Email: {email}
              <br />
              Phone: {phone}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default User;
