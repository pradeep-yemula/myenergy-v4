import React from "react";
import { Link, useNavigate } from "react-router-dom";
const Navbar = (props) => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    if (window.confirm("Do you really want to log out")) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("token_type");
      localStorage.removeItem("username");
      props.setNavbar(false);
      navigate("/");
    }
  };
  return (
    <div id="Nav">
      {props.navbar ? (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            {/* eslint-disable-next-line*/}
            <Link className="navbar-brand" to="/home">
              MyEnergy
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    aria-current="page"
                    to="/interruptions_form"
                  >
                    Interruptions
                  </Link>
                </li>

                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Bills
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/PaidBills">
                        Paid
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/PendingBills">
                        Pending
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/FailedBills">
                        Failed
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Reports
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/HourlyConsumption">
                        Hourly
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/DailyConsumption">
                        Daily
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/WeeklyConsumption">
                        Weekly
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/MonthlyConsumption">
                        Monthly
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/YearlyConsumption">
                        Yearly
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <span
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Outages
                  </span>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/scheduled_outages">
                        Schedule outages
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/active_outages">
                        Active outages
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    aria-disabled="true"
                    to="/userinfo"
                  >
                    Profile
                  </Link>
                </li>
                {/* <li className="nav-item">
          <button className="nav-link "  onClick={handleLogOut}>Logout</button>
        </li> */}
              </ul>
              <button className="btn btn-dark mx-2" onClick={handleLogOut}>
                Logout
              </button>
            </div>
          </div>
        </nav>
      ) : (
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "white",
            marginBottom: "0px",
            paddingBottom: "5px",
          }}
        >
          My Energy
        </h1>
      )}
    </div>
  );
};

export default Navbar;
