const BasicPage = {
  init() {
    Editor.init();
  }
}

const Editor = {
  simplemde: null,
  init() {
    this.simplemde = new SimpleMDE({
      element: document.getElementById('basic')
      // autosave: {
      //   enable: true,
      //   unique_id: 'basic'
      // }
    });
  }
}

BasicPage.init();