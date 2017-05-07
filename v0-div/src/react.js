(() => {
  function div(value) {
    const aDiv = document.createElement("div");
    aDiv.innerHTML = value;
    return aDiv;
  }

  function createElement(el, props, ...children) {
    return div(children[0]);
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