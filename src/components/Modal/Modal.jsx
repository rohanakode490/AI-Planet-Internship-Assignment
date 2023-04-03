import React, { useEffect, useState } from "react";
import { IoMdTrash } from "react-icons/io";
import "./Modal.css";
import { Link } from "react-router-dom";

const Modal = ({ id }) => {
  const [showModal, setshowModal] = useState(false);

  const MyModal = () => {
    useEffect(() => {
      document.body.style.overflowY = "hidden";

      return () => {
        document.body.style.overflowY = "scroll";
      };
    }, []);

    const handledelete = () => {
      const data = JSON.parse(localStorage.getItem("data"));
      const newdata = data.filter((item) => {
        console.log(typeof item.id, typeof id)
        return item.id !== parseInt(id);
      });
      console.log("newdata", newdata);
      console.log(id);
      localStorage.setItem("data", JSON.stringify(newdata));
    };

    return (
      <>
        <div
          className="modal-wrapper"
          onClick={() => setshowModal(false)}
        ></div>
        <div className="modal-container">
          <h1 className="delete-model">Delete model</h1>
          <p className="delete-model-text">
            This action is irreversible. Are you sure you want to delete this
            model?
          </p>
          <div className="modal-btn">
            <button className="cancel-btn" onClick={() => setshowModal(false)}>
              Cancel
            </button>
            <Link to="/" className="delete-btn" onClick={handledelete}>
              Delete
            </Link>
          </div>
        </div>
      </>
    );
  };

  return (
    <div>
      <button className="card-btn" onClick={() => setshowModal(true)}>
        <span>
          <IoMdTrash color="#ccc" />
        </span>
        Delete
      </button>
      {showModal && <MyModal />}
    </div>
  );
};

export default Modal;
