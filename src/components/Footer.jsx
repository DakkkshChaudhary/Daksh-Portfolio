import React from 'react'

export default function Footer() {
  return (
    <>
          <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="mb-3">
          <a href="https://github.com/DakkkshChaudhary" target="_blank" rel="noreferrer" className="text-light mx-2">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://linkedin.com/in/daksh-choudhary-286a21257/" target="_blank" rel="noreferrer" className="text-light mx-2">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="mailto:dakshchaudhary584@gmail.com" className="text-light mx-2">
            <i className="fas fa-envelope fa-lg"></i>
          </a>
        </div>

        <p className="mb-0">
          © {new Date().getFullYear()} <strong>Daksh Choudhary</strong>. All rights reserved.
        </p>
      </div>
    </footer>
    </>
  )
}
