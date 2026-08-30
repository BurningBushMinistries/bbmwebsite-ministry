import React, { useState } from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const timelineData = [
  { year: "1998", text: "Ministry founded in East London" },
  { year: "2000s", text: "Expansion across provinces" },
  { year: "2010s", text: "Leadership development & schools established" },
  { year: "Today", text: "National & international impact" },
];

const provinces = [
  "Eastern Cape",
  "Western Cape",
  "KwaZulu-Natal",
  "Free State",
  "Gauteng",
];

export default function BBMWebsite() {
  const [selectedProvince, setSelectedProvince] = useState(null);

  return (
    <div style={{ fontFamily: "Poppins, sans-serif" }}>

      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">BBM</a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#about">About</a></li>

              {/* Ministries Dropdown */}
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                  Ministries
                </a>
                <ul className="dropdown-menu">
                  {["Army of Women","Covenant Keepers","Youth Quake","Faith Kids","Olea Bond"].map((m, i) => (
                    <li key={i}><a className="dropdown-item" href="#ministries">{m}</a></li>
                  ))}
                </ul>
              </li>

              <li className="nav-item"><a className="nav-link" href="#sermons">Sermons</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ height: "80vh", backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('assets/img/hero/bg_all.jpg')", backgroundSize: "cover", display: "flex", alignItems: "center", color: "white" }}>
        <div className="container">
          <motion.h1 initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}>
            About Burning Bush Ministries
          </motion.h1>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-5">
        <div className="container">
          <h2>Who We Are</h2>
          <p>Reaching the nations, raising leaders, and planting churches.</p>

          <div className="row mt-4 g-4">
            <div className="col-md-6">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 shadow rounded bg-white">
                <h4>Vision</h4>
                <p>Reaching the Nations with the Gospel of Jesus Christ.</p>
              </motion.div>
            </div>
            <div className="col-md-6">
              <motion.div whileHover={{ scale: 1.05 }} className="p-4 shadow rounded bg-white">
                <h4>Mission</h4>
                <ul>
                  <li>Plant churches</li>
                  <li>Equip believers</li>
                  <li>Reach souls</li>
                  <li>Raise leaders</li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP INTERACTIVE */}
      <section className="py-5 bg-light">
        <div className="container">
          <h2>Our Footprint</h2>
          <div className="d-flex flex-wrap gap-2">
            {provinces.map((p, i) => (
              <button key={i} className="btn btn-outline-dark" onClick={() => setSelectedProvince(p)}>
                {p}
              </button>
            ))}
          </div>

          {selectedProvince && (
            <motion.div className="mt-4 p-3 bg-white shadow rounded" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h5>{selectedProvince}</h5>
              <p>Churches and leadership structures in this province.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* TIMELINE ANIMATED */}
      <section className="py-5">
        <div className="container">
          <h2>Our Journey</h2>
          <div className="position-relative">
            {timelineData.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} className="mb-4">
                <div className="p-3 shadow rounded bg-white">
                  <h5>{item.year}</h5>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MINISTRIES PAGE SECTION */}
      <section id="ministries" className="py-5 bg-light">
        <div className="container">
          <h2>Ministries</h2>
          <div className="row g-4">
            {["Army of Women","Covenant Keepers","Youth Quake","Faith Kids","Olea Bond"].map((m, i) => (
              <div className="col-md-4" key={i}>
                <motion.div whileHover={{ y: -10 }} className="p-4 shadow rounded bg-white">
                  <h5>{m}</h5>
                  <p>Click to explore ministry details, leadership, and activities.</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERMONS */}
      <section id="sermons" className="py-5">
        <div className="container">
          <h2>Latest Sermons</h2>
          <div className="row g-4">
            {[1,2,3].map((s) => (
              <div className="col-md-4" key={s}>
                <motion.div whileHover={{ scale: 1.05 }} className="shadow rounded overflow-hidden">
                  <img src="img/sermon.jpg" className="img-fluid" />
                  <div className="p-3">
                    <h6>Sermon Title</h6>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-black text-light text-center py-3">
        © {new Date().getFullYear()} Burning Bush Ministries
      </footer>

    </div>
  );
}
