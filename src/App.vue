<template>
   <Header />
     <div class="container">
    <router-view />
     </div>
  <Footer />
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  components: {
    Header,
    Footer
  }
};
</script>

<style>


:root{
  --mainColor:#eaeaea;
  --secondaryColor:#fff;

  --borderColor:#c1c1c1;

  --mainText:black;
  --secondaryText:#212427;

  --themeDotBorder:#24292a;

  --previewBg:#rgb(251,249,243,0.8);
  --previewShadow:#f0ead6;

  --buttonColor:black;

}
html, body{
  padding:0;
  margin:0;
  scroll-behavior: smooth;
}
/** after java theme-switcher**/
body *{
  transition: 0.3s;
}

h1,h2,h3,h4,h5,h6,strong{
  color:var(--mainText);
  font-family: 'Russo One', sans-serif;
}

p,li,span,label,input,textarea{
  color:var(--secondaryText);
  font-family: 'Roboto Mono', monospace;
}

a{
  text-decoration: none;
  color:#17a2b8;
}
ul{
  list-style: none;
}

h1{ font-size: 56px;}
h2{ font-size: 36px;}
h3{ font-size: 28px;}
h4{ font-size: 24px;}
h5{ font-size: 20px;}
h6{ font-size: 16px;}

#app {
  font-family: 'Russo One', sans-serif;
 
  color: #212427;
}

#nav a {
  font-weight: bold;
  color: #212427;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.s1{
  background-color:var(--mainColor);
  border-bottom:1px solid var(--borderColor);
  overflow:auto;
}
.s2{
  background-color:var(--secondaryColor);
  border-bottom:1px solid var(--borderColor);
  overflow: auto;
}
.main-container{
  width:1200px;
  margin: 0 auto ;
}

.greeting-wrapper{
  display:grid;
  text-align: center;
  align-content: center;
/**  border: 2px dashed lightcoral;**/
  min-height: 10 em;
}

.intro-wrapper{
  background-color: var(--secondaryColor);
  border: 1px solid var(--borderColor);
  border-radius: 5px 5px 0 0;

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
  box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
display:grid;
grid-template-columns: 1fr 1fr;
/**grid-template-rows: 3em 30em;**/
grid-template-areas:
 'nav-wrapper nav-wrapper'
 'right-column right-column'
 ;

}

.nav-wrapper{
  border-radius: 5px 5px 0 0;
  grid-area: nav-wrapper;
/**  border:1px dashed lightcoral;**/
  border-bottom: 1px solid var(--borderColor);
  display: flex;
  justify-content: space-between;
  /**align-content:center;**/
  align-items: center;
  background-color: var(--mainColor);

}

#navigation{
  margin:0;
  padding:10px;
  /**display:flex;/** somehow 1 working with flex :D 98-99**/
}
#navigation li{
 display:inline-block;
  margin-left:5px;
  margin-right: 5px;
  /**padding :10px;/**somehow 2   103-105 **/
}
#navigation a{
  color:var(--mainText);
}
.dots-wrapper{
display: flex;
padding:10px;
}
.browser-dot{

  background-color: black;
  height:15px;
  width:15px;
  /**border-radius:50%**/
  border-radius :7.5px;
  margin:5px;
/**  padding :5px; **/
  -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
  box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);

}
#dot-1{
  background-color: #fc6858;
}
#dot-2{
  background-color: #fec82f;
}
#dot-3{
  background-color: #2aca3e;
}

#profile-pic{
  display:block;
  margin:0 auto;
  height:200px;
  width: 200px;
  object-fit:cover;
  border:2px solid var(--borderColor);

}
.theme-wrapper{
  display: flex;
  justify-content: center;
}
.theme-dot{
  height:30px;
  width: 30px;
  border-radius: 50%;
  background-color: black;

  margin: 5px;
  border: 2px solid var(--themeDotBorder);

  -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
  box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);

  cursor: pointer;

}
.theme-dot:hover{
  border-width: 5px;
}
#light-mode{
  background-color: #fff;
}
#blue-mode{
  background-color: #192734;
}
#green-mode{
  background-color: #78866b;
}
#purple-mode{
  background-color: #7e4c74;
}
#settings-note{
  font-size: 12px;
  font-style: italic;
  text-align: center;
}

.right-column{
  grid-area: right-column;
  /**border:1px dashed lightcoral;**/
  padding-top: 50px;
  padding-bottom: 50px;
  display:grid;
  align-content: center;
  justify-self: center;
}
.preview-wrapper{
  background-color: var(--previewShadow);
  width: 300px;
  height: 180px;
  padding-left: 30px;
  padding-top: 30px;
}
#preview{
  width: 300px;
  border:1.5px solid #17a2b8;
  background-color: var(--previewBg);
  padding:15px;
  position: relative;

}
.corner{
  height: 7px;
  width: 7px;
  border-radius: 50%;
  border: 1.5px solid #17a2b8;
  background-color:#fff;
  position: absolute;
}
#corner-tl{
  top:-5px;
  left: -5px;
}
#corner-tr{
  top:-5px;
  right: -5px;
}
#corner-bl{
  bottom:-5px;
  left: -5px;
}
#corner-br{
  bottom:-5px;
  right: -5px;
}

.about-wrapper{
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(320px,1fr));
/** point to be noted i nearly spent 3 hrs for making -fix to -fit:XD**/
  padding-bottom: 50px;
  padding-top: 50px;
  gap:100px;
}
#skills{
  display: flex;
  justify-content: space-evenly;
  background-color: var(--previewShadow);
}
.social-links{
  display: grid;
  align-content: center;
  text-align: center;
}
#social-img{

    display:block;
    margin:0 auto;

    width: 100%;
    object-fit:cover;
    border:2px solid var(--borderColor);
    /**width=100%;**/
}
.post-wrapper{
display: grid;
grid-template-columns: repeat(auto-fit,320px);
gap:20px;
justify-content: center;
padding-bottom: 50px;/** so to take the bottom edge of preview bit up*/
}
.post{
  border:1px solid var(--borderColor);
  -webkit-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
  box-shadow: -1px 1px 3px -1px rgba(0,0,0,0.75);
}
.thumbnail{
  display: block;
  width: 100%;
  height:200px;
  object-fit: cover;
}
.post-preview{
  background-color: #fff;
  padding:15px;
}
.post-title{
  color: black;
  margin:0;
}
.post-intro{
  color:#4b5156;
  font-size: 14px;
}
#contact-form{
  display: block;
  max-width: 600px;
  margin:0 auto;
  border: 1px solid var(--borderColor);
  border-radius: 5px;
  background-color: var(--mainColor);
  padding:15px;
  margin-bottom: 50px;
}
#contact-form label{
  line-height: 3em;
}
contact-form textarea{
  min-height: 100px;
  font-size: 14px;
}
.input-field{
  width:100%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: var(--secondaryColor);
  border-radius: 5px;
  border: 1px solid var(--borderColor);
  font-size: 14px;
}
#submit-btn{
  width:100%;
  padding-top: 10px;
  padding-bottom: 10px;
  color:#fff;
  background-color: var(--buttonColor);
  border:none;
}

@media screen and (max-width:1200px){
  .main-container{
    width:95%;
}
}
@media screen and (max-width:650px){
  .intro-wrapper{
    grid-template-columns: 1fr;
    /**for overflow correction**/
    grid-template-areas:
     'nav-wrapper'
     'left-column'
     'right-column'
     ;
}
  .right-column:{
    justify-content: center;
      }
}
@media screen and (max-width: 400px){
	#preview-shadow{
		max-width: 280px;
		height: 180px;
		padding-left: 10px;
		padding-top: 10px;
	}

	#preview{
		width: 280px;

	}
}

</style>
