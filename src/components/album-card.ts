import { LitElement, html, css, property } from 'lit-element';

import { SHARED_STYLES } from '../shared-styles';

export class AlbumCard extends LitElement {
  static styles = [
    SHARED_STYLES,
    css`
      :host {
        display: block;
      }

      img {
        width: 100px;
        height: 100px;
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;
      }

      .album-card {
        display: flex;
        flex-direction: column;
        border-radius: 4px;
      }

      .album-card-info {
        display: flex;
        flex-direction: column;
      }

      ::slotted([slot="album-year"]) {
        color: #b7c8d9;
        font-size: .87rem;
        font-weight: bold;
      }

      ::slotted([slot="album-title"]) {
        color: #5f676f;
        font-weight: bold;
        font-size: .92rem;
      }
    `];

  render() {
    return html`
      <div class="album-card">
        <img src="${this.getAttribute('imgSrc')}" alt="">
        <div class="album-card-info">
          <slot name="album-year"></slot>
          <slot name="album-title"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('album-card', AlbumCard);