(() => {
  function anElement(elementName, values) {
    const element = document.createElement(elementName);
    element.innerHTML = values.join('');
    return element;
  }

  function createElement(el, props, ...children) {
    return anElement(el, children);
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