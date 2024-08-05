import React from 'react';
import './Footer.css'; // Ensure you import the CSS file with dark mode styles

const Footer = () => {
  const iconStyle = { fontSize: '24px' }; // Define font size for icons

  return (
    <div className="container my-5">
      <footer className="text-center text-white">
        {/* Grid container */}
        <div className="container pt-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://m.facebook.com/profile.php?id=61555210807479"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-facebook-f" style={iconStyle}></i>
            </a>

            {/* Twitter */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!" // Replace with your Twitter URL if needed
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-twitter" style={iconStyle}></i>
            </a>

            {/* Linkedin */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.linkedin.com/in/abdelrhman-mohmed-474957251/"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-linkedin" style={iconStyle}></i>
            </a>

            {/* Github */}
            <a
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://github.com/S7eko"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i className="fab fa-github" style={iconStyle}></i>
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}

        {/* Copyright */}
        <div className="text-center text-dark p-3">
          Abdel-Rhman Mohamed ©
          <a className="text-dark" href="https://mdbootstrap.com/">01157237318</a>
        </div>
        {/* Copyright */}
      </footer>
    </div>
  );
}

export default Footer;
