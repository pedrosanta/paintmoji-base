class EmojiCanvasClearButton extends HTMLElement {
  counter = 0;

  constructor() {
    super();

    // Add click listener
    this.querySelector('button').addEventListener('click', this.handleClick);
  }

  handleClick() {
    document.querySelector('.emoji-canvas__canvas').innerHTML = '';
    Notiflix.Notify.success('Canvas cleared.');
  }
}

export default EmojiCanvasClearButton;
