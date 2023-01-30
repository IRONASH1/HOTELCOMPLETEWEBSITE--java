class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<div class="main">

      <!-- Now Create a read preloader using this spinner -->

  <div class="preloader-wrapper">
     
  </div>
    <header>
      <ul class="navList">
      
        <li class="logo">
        <a href="index.html">
        <img src="assests/images/logo.png" alt="logo" />
      </a>
        </li>
        <li class="login">
<!-- Button trigger modal -->

<input class="btn btn-light" data-toggle="modal" data-target="#exampleModalCenter" type="submit" value="login" id="myButton1" onclick="checkData()"></input>
        </li>
      </ul>
    </header>

    <!-- Modal for login-->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" id="modal-dialog" role="document" >
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"> <strong>Please Login</strong> </h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
          <form id="log" action="index.html" class="modal-form">
              <label for="name"
                >Username:
                <input
                  type="text"
                  placeholder="Enter Username"
                  autocomplete="off"
                  required id="email" /></label
              ><br>
              <label for="password"
                >Password:
                <input
                  type="Password"
                  placeholder="Enter Password"
                  autocomplete="off"
                  required id="pwd" /></label>
              <hr>
              <input onclick="checkData()" type="submit" value="login" id="myButton1" class="btn btn-primary"></input>
            </form>
            
          </div>
    </div>
  </div>
</div>

  `;
  }
}

customElements.define("my-header", MyHeader);

//   templates for footer

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `  <footer>
        
      <ul class="navList">
        <li class="contact">
           <!-- Button trigger modal for contact us-->
<button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal"> Contact Us</button>
        </li>
        <li class="copyRight">
          <p>&#169; 2023 ROOM SEARCH PVT.LTD</p>
        </li>
        <!-- The social media logo images code from here  -->
        
        <li class="socailImages">
          <a href="https://www.facebook.com/" target="_blank">
            <img alt="Facebook" src="assests/images/facebook.png" />
          </a>
          
          <a href="https://www.instagram.com/" target="_blank">
            <img alt="Instagram" src="assests/images/instagram.png" />
          </a>
          
          <a href="https://twitter.com/" target="_blank">
            <img alt="Twitter" src="assests/images/twitter.png" />
          </a>
        </li>
      </ul>
      
    </footer>
    
<!-- Modal for contact us-->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel"><strong>Get in touch</strong></h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <form action="index.html">
        <h4>Thank you for reaching out!!!</h3>
          <P>Please enter your email and we will get back to you.</P>
  <label for="email"> Email:</label><input type="text" placeholder="Enter your email id" name="mail" required>

  
  <div class="modal-footer">
    <button type="Submit" class="btn btn-primary">Submit</button>
  </div>
</form>
  </div>
</div>
</div>

    
  </div>
</section>

 `;
  }
}

customElements.define("my-footer", MyFooter);

// for login of already given user name and password as admin
function checkData() {
  localStorage.setItem("userEmail", "admin");
  localStorage.setItem("userPwd", "admin");

  var enterEmail = document.getElementById("email").value;
  var enterPwd = document.getElementById("pwd").value;

  //get data from localstorage

  // var getEmail = localStorage.getItem('userEmail');
  // var getPwd = localStorage.getItem('userPwd');

  if (enterEmail == "admin") {
    if (enterPwd == "admin") {
      // localStorage.setItem("code","secret");

      alert("successfully loggedin!!");

      let elem = document.getElementById("myButton1");
      if (elem.value == "login") elem.value = "logout";
      document.getElementById("email").value = "";
      document.getElementById("pwd").value = "";
      var pay = document.getElementById("pay");
      pay.disabled = false;
    } else {
      alert("wrong password");
    }
  } else {
    let elem = document.getElementById("myButton1");
    if (elem.value == "logout") elem.value = "login";
    // alert("logout successful");
  }
}

function pay() {
  alert("Hi your booking is successfull !!");
}
