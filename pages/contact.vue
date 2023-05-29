<template>
  <section class="content">
    <section class="wpo-page-title">
      <div class="container">
        <div class="row">
          <div class="col col-xs-12">
            <div class="wpo-breadcumb-wrap">
              <h2>Contact</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="wpo-contact-pg-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col col-lg-10 offset-lg-1">
            <div class="office-info">
              <div class="row">
                <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div class="office-info-item">
                    <div class="office-info-icon">
                      <div class="icon">
                        <i class="fi flaticon-maps-and-flags"></i>
                      </div>
                    </div>
                    <div class="office-info-text">
                      <h2>Adres</h2>
                      <p>
                        <a
                          href="https://goo.gl/maps/sTUko1AQDDEpzfAp8"
                          target="_blank"
                          rel="noopener noreferrer"
                          >3945 Ham</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div class="office-info-item">
                    <div class="office-info-icon">
                      <div class="icon">
                        <i class="fi flaticon-email"></i>
                      </div>
                    </div>
                    <div class="office-info-text">
                      <h2>E-mailadres</h2>
                      <p>
                        <a href="mailto:info@cherrymoments.be"
                          >info@cherrymoments.be</a
                        >
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col col-xl-4 col-lg-6 col-md-6 col-12">
                  <div class="office-info-item">
                    <div class="office-info-icon">
                      <div class="icon">
                        <i class="fi flaticon-phone-call"></i>
                      </div>
                    </div>
                    <div class="office-info-text">
                      <h2>Telefoonnummer</h2>
                      <p><a href="tel:+32 478 17 16 43">+32 478 17 16 43</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="wpo-contact-title">
              <h2>Heb je vragen?</h2>
              <p>Neem snel contact met me op!</p>
            </div>
            <div class="wpo-contact-form-area">
              <form
                method="post"
                class="contact-validation-active"
                id="contact-form-main"
              >
                <div class="d-flex flex-column gap-4">
                  <div class="row">
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"
                        placeholder="Naam*"
                      />
                    </div>
                  </div>
                  <div class="row gap-4 gap-md-0">
                    <div class="form-group col-md-6">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="E-mailadres*"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <input
                        type="text"
                        class="form-control"
                        name="phoneNumber"
                        id="phoneNumber"
                        placeholder="Telefoonnummer*"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="form-group">
                      <textarea
                        class="form-control"
                        name="message"
                        id="message"
                        placeholder="Bericht*"
                      ></textarea>
                    </div>
                  </div>
                  <div class="submit-area">
                    <button type="submit" class="theme-btn-s4">Verstuur</button>
                    <div id="loader">
                      <i class="ti-reload"></i>
                    </div>
                  </div>
                </div>
                <div class="error-handling-messages">
                  <div id="success">
                    Bedankt voor je bericht! Ik neem zo snel mogelijk contact
                    met je op.
                  </div>
                  <div id="error">
                    Er ging iets mis tijdens het verzenden van het bericht.
                    Probeer het later opnieuw of stuur een e-mail naar
                    <a href="mailto:info@cherrymoments.be"
                      >info@cherrymoments.be</a
                    >.
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="wpo-contact-map-section">
      <h2 class="hidden">Contact map</h2>
      <div class="wpo-contact-map">
        <!-- Update zoom level => !4f20 -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40081.13724606118!2d5.1626397!3d51.10714875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f20!3m3!1m2!1s0x47c12e2aafc27e03%3A0xc32cf25ec3075f9f!2s3945%20Ham!5e0!3m2!1sen!2sbe!4v1684667835735!5m2!1sen!2sbe"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </section>
</template>
