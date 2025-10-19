import { entity } from "./entity.js";

export const quest_component = (() => {

  const _AUDIO_SRC = './resources/sounds/princess.mp3'; // Path to your audio
  let _audioPlayed = false; // to prevent multiple overlapping plays

  class QuestComponent extends entity.Component {
    constructor() {
      super();

      // hide the quest UI initially
      const e = document.getElementById('quest-ui');
      e.style.visibility = 'hidden';

      // prepare audio
      this._audio = new Audio(_AUDIO_SRC);
    }

    InitComponent() {
      this._RegisterHandler('input.picked', (msg) => this._OnPicked(msg));
    }

    _OnPicked(msg) {
      // only play audio once
      if (!_audioPlayed) {
        _audioPlayed = true;
        this._audio.play();
      }
    }
  };

  return {
    QuestComponent: QuestComponent,
  };
})();
