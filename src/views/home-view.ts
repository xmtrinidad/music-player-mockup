import { LitElement, html, css, property } from 'lit-element';

import '../components/popular-card';
import '../components/album-card';

import { POPULAR_CARD_DATA, LAST_ALBUMS } from '../APP_DATA';

export class HomeView extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    h2 {
      color: #687680;
    }

    .home-view-container {
      display: flex;
    }

    popular-card {
      margin: 16px 0;
    }

    .last-albums-container {
      max-width: 230px;
    }

    .albums {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  `;

  @property({type: Array}) popularCards = POPULAR_CARD_DATA;
  @property({type: Array}) albumCards = LAST_ALBUMS;

  render() {
    return html`
      <div class="home-view-container">
        <div class="popular-cards">
          <h2>Popular</h2>
          ${this.popularCards.map(card => 
            html`
            <popular-card imgSrc="${card.imgSrc}">
              <span slot="track-number">${card.track}</span>
              <span slot="track-name">${card.trackName}</span>
              <span slot="track-album">${card.trackAlbum}</span>
              <span slot="track-plays">${card.trackPlays}</span>
            </popular-card>
          `)}
        </div>
        <div class="last-albums-container">
            <h2>Last Albums</h2>
            <div class="albums">
              ${this.albumCards.map(card => 
                html`
                  <album-card imgSrc="${card.imgSrc}">
                    <span slot="album-year">${card.albumYear}</span>
                    <span slot="album-title">${card.albumTitle}</span>
                  </album-card>
                `)}
            </div>
        </div>
      </div>
    `;
  }
}

customElements.define('home-view', HomeView);