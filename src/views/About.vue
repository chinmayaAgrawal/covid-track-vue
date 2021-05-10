<template>
  <div class="about">
    <h1>Hello ,This is an about page</h1>
    <section class="s1">
    <div class="main-container">
      <div class="greeting-wrapper">
      </div>
      <div class=" intro-wrapper">
        <div class="nav-wrapper">
          <!--  new wrapper -->
          <div class="dots-wrapper">
            <div id="dot-1" class="browser-dot"> </div>
            <div id="dot-2" class="browser-dot"> </div>
            <div id="dot-3" class="browser-dot"> </div>
            <!--nav-->
          </div>
          <ul id="navigation">
            <li> <a href ="http://www.developedbychinmaya.me/wDemonstration" target="_blank">contact</a></li>
      <!--  <li> <a href ="#" >contact</a></li> -->
          </ul>
        </div>
        <!--
        <div class="left-column">
          <img id="profile-pic" src="" alt="pic">
          <h5 style="text-align:center;line-height:0">Personalize Theme</h5>-->
        <!--  left-column --><!--
          <div id="theme-option-wrapper" class="theme-wrapper">
            <div  data-mode="light" id="light-mode" class="theme-dot"></div>
            <div  data-mode="blue" id="blue-mode" class="theme-dot"></div>
            <div  data-mode="green" id="green-mode" class="theme-dot"></div>
            <div  data-mode="purple" id="purple-mode" class="theme-dot"></div>
          </div>
          <p id="settings-note">These settings will be
            saved for<br>your next visit</p>
        </div> -->
        <div class="right-column">
        <!--  right-column -->
          <div id ="preview-shadow" class="preview-wrapper">
            <div id="preview">
              <div id="corner-tl" class="corner"></div>
              <div id="corner-tr" class="corner"></div>
              <h3> What Is This Application</h3>
              <p>This an nearly real-time covid-19 data tracker which implements JS using Vue and NPM</p>
              <div id="corner-bl" class="corner"></div>
              <div id="corner-br" class="corner"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="s2">
    <div class="main-container">

      <!--ABOUT-->
      <div class="about-wrapper">
        <div class="about-me">
          <h4> About App</h4>

          <p><i><b>COVID-19 TRACKER</b></i> is an javascript based web app that uses tailwind and Vue</p>

          <p></p>

          <!--<hr style="color: lightcoral;height:2px">-->

          <h4> PARTICULARS</h4>

          <p></p>
          <div id="skills">
            <ul>
              <li><i><b>API</b></i> :<a href="https://www.covid19api.com">www.covid19api.com</a></li>
              <li><i><b>Language</b></i>: javascript </li>
              <li><i><b>Library</b></i>: vue.js</li>
              <li><i><b>Dependencies</b>:</i>Moments</li>
              <li><i><b>Package Manager</b></i>: NPM </li>
           </ul>
         </div>
      </div>
      <div class="social-links">
        <img id="social-img" src="../assets/pic1.png" alt="social-pic">
        <h3></h3>
        <a target="_blank" href="#"></a>
        <br>
        <a target="_blank" href="#"></a>
      </div>
     </div>
    </div>
  </section>
  <section class="s1">
    <div class="main-container">
      <!--PORT-FOLIO-->
       <div class="post-wrapper"><a id="text">CONNECT US HERE</a>
         
           <!-- <a href="#!">
              <i class="fab fa-twitter fa-3x" ></i>
            </a>-->
            <a class="mail" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBmXMJRTWXwmdhzPSchLBzzbhpRgfwfNMFpGmvVcnQNbrHBsXmhksWqdXXfBsFZRSPzCPML">
              <i class="fas fa-envelope fa-3x" ></i>
            </a>
            <a class="lin" href="https://www.linkedin.com/in/chinmaya-agrawal" target="_blank">
              <i class="fab fa-linkedin fa-3x" ></i>
            </a>
            <a class="git" href="https://github.com/chinmayaAgrawal" target ="_blank">
              <i class="fab fa-github fa-3x"></i>
            </a>
            <a class="web" href="http://www.developedbychinmaya.me/wDemonstration" target ="_blank">
              <i class="fas fa-globe fa-3x"></i>
            </a>
          
    </div>
    </div>
    <div class = "item">
      <a href="https://github.com/chinmayaAgrawal/covid-track-vue" target="_blank" class="btn-dark">
        <i class="fab fa-github"></i> <a id="text">FIND CODE HERE</a>
      </a>
    </div>
  </section>
  <section class="s2">
    <div class="main-container">
      <!--CONTACT-->
      <h3 style="text-align:center;">Get In Touch</h3>
      <form id="contact-form"
       action="https://formspree.io/f/xnqljepn"
       method="POST" target="_blank"
       >
        <label>NAME</label>
        <input class="input-field" type="text" name="name" placeholder="Your name" >

        <label>SUBJECT</label>
        <input class="input-field" type="text" name="subject" placeholder= "How can we help?">

        <label>E-MAIL</label>
        <input class="input-field" type="text" name="email" placeholder= "your@email.com">

        <label>YOUR-MESSAGE</label>
        <textarea class="input-field" name="message" placeholder= "What's on your mind?"></textarea>

        <input id="submit-btn" type="submit" value="send">
      </form>
    </div>

  </section>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>

