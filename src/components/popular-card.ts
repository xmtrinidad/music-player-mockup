import { LitElement, html, css, property } from 'lit-element';
import { heart_svg, more_vert_svg } from '../APP_SVGS';

import { SHARED_STYLES } from '../shared-styles';

export class PopularCard extends LitElement {
  static styles = [
    SHARED_STYLES,
    css`
      :host {
        display: block;
      }

      * {
        box-sizing: border-box;
      }

      .popular-card {
        display: flex;
        height: 75px;
        box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
        max-width: 730px;
        border-radius: 4px;
      }

      .popular-card img {
        width: 75px;
        height: 75px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }

      .popular-card-content {
        display: grid;
        grid-template-columns: 1fr 3fr 2fr 2fr 1fr 1fr;
        align-items: center;
        width: 100%;
      }

      .popular-card-content ::slotted(span) {
        color: #8d9399;
        font-weight: bold;
        font-size: .95rem;
      }

      .track-favorite svg {
        fill: #ff6156;
      }
    `];

  render() {
    return html`
      <div class="popular-card">
        <img src="https://picsum.photos/75/75" alt="">
        <div class="popular-card-content">
          <div class="track-number">
            <slot name="track-number"></slot>
          </div>
          <div class="track-name">
            <slot name="track-name"></slot>
          </div>
          <div class="track-album">
            <slot name="track-album"></slot>
          </div>
          <div class="track-plays">
            <slot name="track-plays"></slot>
          </div>
          <div class="track-favorite">
            <button>${heart_svg}</button>
          </div>
          <div class="track-more">
            <button>${more_vert_svg}</button>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('popular-card', PopularCard);