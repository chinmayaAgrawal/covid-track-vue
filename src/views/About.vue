<template>
  <div class="about">
    <h1>This is an about page</h1>
    <section class="s1">
    <div class="main-container">
      <div class="greeting-wrapper">
       <h1>Hello, </h1>
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
            <li> <a href ="#">contact</a></li>
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
              <li><i><b>API</b></i> :<a href="www.covid19api.com">www.covid19api.com</a></li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Node.JS</li>
              <li>Express.JS</li>
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
       <div class="post-wrapper">
         
           <!-- <a href="#!">
              <i class="fab fa-twitter fa-3x" ></i>
            </a>-->
            <a id="mail" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=GTvVlcSBmXMJRTWXwmdhzPSchLBzzbhpRgfwfNMFpGmvVcnQNbrHBsXmhksWqdXXfBsFZRSPzCPML">
              <i class="fas fa-envelope fa-3x" ></i>
            </a>
            <a id="lin" href="https://www.linkedin.com/in/chinmaya-agrawal" target="_blank">
              <i class="fab fa-linkedin fa-3x" ></i>
            </a>
            <a id="git" href="https://github.com/chinmayaAgrawal/covid-track-vue" target ="_blank">
              <i class="fab fa-github fa-3x"></i>
            </a>
          
    </div>
    </div>
  </section>
  <!--
  <section class="s1">
    <div class="main-container">-->
      <!--PORT-FOLIO--><!--
      <h3>Some of my past projects</h3>
      <div class="">-->
        <!-- in case there is a overflow just add div to each post to normalise it--><!--
        <div class="post">
          <img class ="thumbnail" src="images/Screenshot (637).png">
          <div class="post-preview">
            <h6 class="post-title" >AUTHENTICATION SYSTEM</h6>
            <p class="post-intro">Authentication system using passport
            By-Crypt.JS with node</p>
            <a href="p1.html">Read More</a>
          </div>
        </div>
        <div class="post">
          <img class ="thumbnail" src="images/Screenshot (82).png">
          <div class="post-preview">
            <h6 class="post-title" >BREAKING BAD DOC.</h6>
            <p class="post-intro"> A documentaion app using react</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <div class="post">
          <img class ="thumbnail" src="">
          <div class="post-preview">
            <h6 class="post-title" >LAB ASSISTANT</h6>
            <p class="post-intro">A real time lab database with results and response using react</p>
            <a href="#">Read More</a>
          </div>
        </div>

      </div>
    </div>
  </section>-->
  <section class="s2">
    <div class="main-container">
      <!--CONTACT-->
      <h3 style="text-align:center;">Get In Touch</h3>
      <form id="contact-form"
       action="https://formspree.io/f/xnqljepn"
       method="POST" target="_blank"
       >
        <label>NAME</label>
        <input class="input-field" type="text" name="name" placeholder="Type your name" >

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

