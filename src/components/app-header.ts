import { LitElement, html, css, property } from 'lit-element';
import { search_svg, play_svg, heart_svg } from '../APP_SVGS';

export class AppHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
    }

    * {
      box-sizing: border-box;
    }

    button {
      background-color: transparent;
      border: none;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      padding: 0;
      margin: 0;
    }

    .app-header-container {
      background-image: url('https://picsum.photos/1000/300');
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      height: 300px;
    }

    label {
      opacity: 0;
      pointer-events: none;
      position: absolute;
    }

    input {
      background-color: transparent;
      color: #fff;
      border: none;
    }

    .header-top {
      display: flex;
      justify-content: space-between;
    }

    .header-top-search {
      display: flex;
      align-items: center;
    }

    .search-icon svg {
      fill: #fff;
    }

    .profile-circle {
      background-image: url('https://picsum.photos/45/45');
      background-repeat: no-repeat;
      background-size: cover;
      width: 45px;
      height: 45px;
      border-radius: 100%;
    }

    .header-body-artist-name {
      color: #fff;
    }

    .header-body-actions {
      display: flex;
      align-items: center;
    }

    .play-button {
      width: 90px;
      height: 25px;
      background-color: #26363f;
      border-radius: 20px;
      color: #fff;
      margin-right: 8px;
    }

    .play-button svg {
      margin-right: 4px;
      fill: #fff;
    }

    .favorite-button {
      width: 32px;
      height: 32px;
      border-radius: 100%;
      background-color: #eef4f2;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .favorite-button svg {
      fill: #ff6156;
    }
  `;

  render() {
    return html`
      <div class="app-header-container">
        <div class="header-top">
          <div class="header-top-search">
            <div class="search-icon">
              <button>${search_svg}</button>
            </div>
            <div class="input-container">
              <label for="search_input">Search for an artist or song</label>
              <input placeholder="Search for an artist or song" type="text" id="search_input">
            </div>
          </div>
          <div class="header-top-user">
            <div class="profile-circle"></div>
          </div>
        </div>
        <div class="header-body">
          <h1 class="header-body-artist-name">Taylor Smith</h1>
          <div class="header-body-actions">
            <button class="play-button"> ${play_svg} <span>Play</span></button>
            <button class="favorite-button">${heart_svg}</button>
          </div>
        </div>
        <div class="header-footer">
          <button active class="header-footer-tab-button">General</button>
          <button class="header-footer-tab-button">About</button>
          <button class="header-footer-tab-button">Events</button>
        </div>
      </div>
    `;
  }
}

customElements.define('app-header', AppHeader);