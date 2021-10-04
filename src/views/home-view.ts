import { LitElement, html, css, property } from 'lit-element';

import '../components/popular-card';
import { POPULAR_CARD_DATA } from '../APP_DATA';

export class HomeView extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    popular-card {
      margin: 16px 0;
    }
  `;

@property({type: Array}) popularCards = POPULAR_CARD_DATA;

  render() {
    return html`
      <div class="home-view-container">
        ${this.popularCards.map(card => 
          html`
            <popular-card>
              <span slot="track-number">${card.track}</span>
              <span slot="track-name">${card.trackName}</span>
              <span slot="track-album">${card.trackAlbum}</span>
              <span slot="track-plays">${card.trackPlays}</span>
            </popular-card>
          `)}
      </div>
    `;
  }
}

customElements.define('home-view', HomeView);