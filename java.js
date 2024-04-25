function toggleLanguage() {
    var content = document.getElementById("content");
    var languageToggle = document.getElementById("language-toggle");
    
    if (content.classList.contains("spanish")) {
      // Cambiar a inglés
      content.innerHTML = `
      <div class="heading">Sign In</div>
      <input
      placeholder="E-mail"
      id="email"
      name="email"
      type="email"
      class="input"
      />
      <input
            placeholder="Password"
            id="password"
            name="password"
            type="password"
            class="input"
     />
     <span class="forgot-password"><a href="#">Forgot Password ?</a></span>
     <span class="agreement"><a href="#">Learn user licence agreement</a></span>
      `;
      content.classList.remove("spanish");
      languageToggle.textContent = "EN/ES";
    } else {
      // Cambiar a español
      content.innerHTML = `
        <h1>Hola</h1>
        <p>Este es algún contenido en español.</p>
      `;
      content.classList.add("spanish");
      languageToggle.textContent = "ES/EN";
    }
  }