const items = document.querySelectorAll('.accordion button');
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

/*
<footer>
        <div class="container-footer">
            <div class="row">
                <div class="col" id="company">
                    <img src="images/logo.png" alt="" class="logo">
                    <p id="rea">
                        We will help you realize your dream of studying abroad.
                    </p>
                    <div class="social">
                        <a href="#"><i class="fab fa-facebook"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <p id="copy">
                        © ALLRIGHT RESERVED - METAVERSE APLLY 2023
                    </p>
                </div>
                <div class="col" id="services">
                    <h3>Services</h3>
                    <div class="links">
                        <a href="#">Blog</a>
                        <a href="#">Documents</a>
                        <a href="#">Community</a>
                        <a href="#">Commom app</a>
                    </div>
                </div>
                <div class="col" id="useful-links">
                    <h3>Links</h3>
                    <div class="links">
                        <a href="index.html">Home</a>
                        <a href="#">Frequently questions</a>
                        <a href="#">About us</a>
                        <a href="#">Help</a>
                    </div>
                </div>
                <div class="col" id="contact">
                    <h3>Contact</h3>
                    <div class="contact-details">
                        <i class="fa fa-location"></i>
                        <p>Araquari, BR-280, <br> SC, Brazil</p>
                    </div>
                    <div class="contact-details">
                        <i class="fa fa-phone"></i>
                        <p>+55 (47) 98804-2804</p>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="form">
                    <form action="">
                        <input type="text" placeholder="Email here...">
                        <button><i class="fa fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </div>
    </footer>*/