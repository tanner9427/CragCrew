// server/src/pages/auth.ts
import { renderPage, css, html } from "@calpoly/mustang";

export class LoginPage {
  render() {
    return renderPage({
      scripts: [
        `
        import { define, Auth } from "@calpoly/mustang";
        import { LoginForm } from "/scripts/login-form.js";

        define({
          "mu-auth": Auth.Provider,
          "login-form": LoginForm
        });
        `
      ],
      styles: [
        css`
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
          }
          article {
            max-width: 400px;
            padding: 2rem;
            background: white;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
          }
          .register {
            margin-top: 1rem;
            text-align: center;
          }
          a {
            color: #007bff;
            text-decoration: none;
          }
        `
      ],
      body: html`
        <body>
          <mu-auth provides="blazing:auth">
            <article>
              <blz-header></blz-header>
              <main class="page">
                <login-form api="/auth/login">
                  <h3 slot="title">Sign in and go places!</h3>
                </login-form>
                <p class="register">
                  Or did you want to
                  <a href="./register">
                    register as a new user
                  </a>
                  ?
                </p>
              </main>
            </article>
          </mu-auth>
        </body>
      `
    });
  }
}
