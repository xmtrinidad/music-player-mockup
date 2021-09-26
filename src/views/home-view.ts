import { LitElement, html, css, property } from 'lit-element';

export class HomeView extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <div class="home-view-container">
        <h1>Home view works</h1>
      </div>
    `;
  }
}

customElements.define('home-view', HomeView);