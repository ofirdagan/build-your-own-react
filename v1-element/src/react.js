(() => {
  function anElement(elementName, children) {
    const element = document.createElement(elementName);
    element.innerHTML = children.join(' ');
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