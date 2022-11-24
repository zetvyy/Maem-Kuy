import routes from "../routes/routes";
import UrlParser from "../routes/url-parser";

class app {
  constructor() {
    this._initialAppShell();
  }

  _initialAppShell() {
    this._content = document.querySelector("#maincontent");
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default app;
