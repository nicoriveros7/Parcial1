import React, { useEffect, useState } from "react";
import "./Home.css";
import { Modal, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import i18n from "./i18n";

const UserData = {
  fullName: "Camilo Pérez",
  bestRunningTime: "🏃‍♂️ 20:45",
  bestSwimmingTime: "🏊‍♂️ 18:32",
  bestCyclingTime: "🚴‍♂️ 1:12:34",
  profileImage:
    "data:image/png;base64,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",
};

const Activities = [
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },
  { id: 1, length: "5km", duration: "20:45", city: "Bogotá", sport: "Correr" },

  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },
  { id: 2, length: "2km", duration: "18:32", city: "Cali", sport: "Nadar" },

  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
  {
    id: 3,
    length: "30km",
    duration: "1:12:34",
    city: "Medellín",
    sport: "Ciclismo",
  },
];

function Home() {
  const { t } = useTranslation(); // Hook para traducción
  const [userData, setUserData] = useState({});
  const [activities, setActivities] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [selectedActivity, setSelectedActivity] = useState(null);

  useEffect(() => {
    setUserData(UserData);
    setActivities(Activities);
  }, []);

  const handleCardClick = (activity) => {
    setSelectedActivity(activity);
    setModalShow(true);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="home-container">
      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>

      <div className="activities-container">
        <h2>{t("title")}</h2>
        <h2>{t("cycling")}</h2>
        <div className="activities-grid">
          {activities
            .filter((activity) => activity.sport === "Ciclismo")
            .map((activity) => (
              <div
                className="activity-card cycling-card"
                key={activity.id}
                onClick={() => handleCardClick(activity)}
              >
                <p>{activity.length}</p>
                <p>{activity.duration}</p>
                <p>{activity.city}</p>
              </div>
            ))}
        </div>

        <h2>{t("running")}</h2>
        <div className="activities-grid">
          {activities
            .filter((activity) => activity.sport === "Correr")
            .map((activity) => (
              <div
                className="activity-card running-card"
                key={activity.id}
                onClick={() => handleCardClick(activity)}
              >
                <p>{activity.length}</p>
                <p>{activity.duration}</p>
                <p>{activity.city}</p>
              </div>
            ))}
        </div>

        <h2>{t("swimming")}</h2>
        <div className="activities-grid">
          {activities
            .filter((activity) => activity.sport === "Nadar")
            .map((activity) => (
              <div
                className="activity-card swimming-card"
                key={activity.id}
                onClick={() => handleCardClick(activity)}
              >
                <p>{activity.length}</p>
                <p>{activity.duration}</p>
                <p>{activity.city}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Sección de información del usuario al final */}
      <div className="user-info">
        <img src={userData.profileImage} alt="profile" />
        <h2>{userData.fullName}</h2>
        <div className="best-times">
          <p>{userData.bestRunningTime}</p>
          <p>{userData.bestSwimmingTime}</p>
          <p>{userData.bestCyclingTime}</p>
        </div>
      </div>

      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedActivity?.sport}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ marginBottom: "10px" }}>
            <strong>Length:</strong> {selectedActivity?.length}
          </div>
          <div style={{ marginBottom: "10px" }}>
            <strong>Duration:</strong> {selectedActivity?.duration}
          </div>
          <div>
            <strong>City:</strong> {selectedActivity?.city}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setModalShow(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Home;
