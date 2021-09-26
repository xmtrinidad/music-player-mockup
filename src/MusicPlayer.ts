import { LitElement, html, css, property } from 'lit-element';

import './components/app-header';
import './views/home-view';

export class MusicPlayer extends LitElement {
  
  @property({type: String}) page = 'main';

  @property({type: String}) title = '';

  static styles = css`
    :host {
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }

    main {
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <app-header></app-header>
      <main>
        <home-view></home-view>
      </main>
    `;
  }
}
