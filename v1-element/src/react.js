(() => {
  function element(name, value) {
    const anElement = document.createElement(name);
    anElement.innerHTML = value;
    return anElement;
  }

  function createElement(el, props, ...children) {
    return element(el, children[0]);
  }

  window.React = {
    createElement
  };
  window.ReactDOM = {
    render: (el, domEl) => {
      domEl.appendChild(el);
    }
  };
})();