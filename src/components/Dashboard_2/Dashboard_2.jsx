import "./Dashboard_2.css";
import { BiPencil } from "react-icons/bi";
import { BsFillCalendarFill, BsStarFill, BsStar } from "react-icons/bs";
import Modal from "../Modal/Modal";
import { Link } from "react-router-dom";

const Dashboard_2 = ({ id, fav, handlefav }) => {
  const data = JSON.parse(localStorage.getItem("data"));
  const prop = data.find((item) => {
    return parseInt(item.id) === parseInt(id);
  });

  const dateformat = (d) =>{
    const date = new Date(d);
    const monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]}`;
    
    return formattedDate
  }

  return (
    <div className="card-dashboard">
      <div className="card-dash">
        <img src={prop.image} alt="" className="image-icon" />


          <div className="detail-title">{prop.title}</div>

        <div className="btns">
          <Link to={`/editform/${id}`} className="card-btn">
            {" "}
            <span>
              <BiPencil type="solid" color="#ccc" />
            </span>
            Edit
          </Link>
          <Modal id={id} />
        </div>
      </div>
      <div className="bottom-dash">
        <div className="dash-summary">{prop.summary}</div>
        <div className="fav-date">
          {prop.favourite ? (
            <BsStarFill
            className="fav-icon"
            color="#fff"
            onClick={() => handlefav(id)}
          />
            ) : (
              <BsStar
                className="fav-icon"
                color="#fff"
                onClick={() => handlefav(id)}
              />
          )}
          <div className="detail-date">
            <BsFillCalendarFill color="#fff" />
            <div className="detail-date-text">
              {dateformat(prop.submit_date)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard_2;
