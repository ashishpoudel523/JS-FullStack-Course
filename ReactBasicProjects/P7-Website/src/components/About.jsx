function About() {
  return (
    <section id="about">
      <div className="container mt-4 pt-4">
        <h1 className="text-center">About Me</h1>

        <div className="row mt-4">
          <div className="col-lg-4">
            <img src="/images/about.jpeg" className="imageAboutPage" alt="" />
          </div>

          <div className="col-lg-8">
            <p>Every Night I Tell Myself, Yes I Did Amazing Job Today</p>

            <div className="row mt-3">
              <div className="col-md-6">
                <ul>
                  <li>Name: Ashish</li>
                  <li>Age: 27</li>
                  <li>Occupation: Web Developer</li>
                </ul>
              </div>

              <div className="col-md-6">
                <ul>
                  <li>Phone: +977 9860800000</li>
                  <li>Email: info@ap.com.np</li>
                  <li>Address: Nepal</li>
                </ul>
              </div>
            </div>

            <div className="row mt-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                maxime provident ducimus facilis id dicta ad accusantium minima
                consequuntur repellat maiores nostrum atque consequatur hic
                quis, pariatur illum recusandae expedita?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
