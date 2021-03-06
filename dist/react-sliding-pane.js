import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

var CLOSE_TIMEOUT = 500;
function ReactSlidingPane(_ref) {
  var isOpen = _ref.isOpen,
      wrapperClass = _ref.wrapperClass,
      title = _ref.title,
      onRequestClose = _ref.onRequestClose,
      onAfterOpen = _ref.onAfterOpen,
      children = _ref.children,
      className = _ref.className,
      overlayClassName = _ref.overlayClassName,
      closeIcon = _ref.closeIcon,
      _ref$from = _ref.from,
      from = _ref$from === void 0 ? 'right' : _ref$from,
      _ref$isCloseIconVisib = _ref.isCloseIconVisible,
      isCloseIconVisible = _ref$isCloseIconVisib === void 0 ? false : _ref$isCloseIconVisib,
      headerClass = _ref.headerClass,
      contentClass = _ref.contentClass,
      bgImage = _ref.bgImage,
      innerWrapperClass = _ref.innerWrapperClass;
  var directionClass = "slide-pane_from_".concat(from);
  return React.createElement(Modal, {
    className: "slide-pane ".concat(directionClass, " ").concat(className || ''),
    overlayClassName: "slide-pane__overlay ".concat(overlayClassName || ''),
    closeTimeoutMS: CLOSE_TIMEOUT,
    isOpen: isOpen,
    onAfterOpen: onAfterOpen,
    onRequestClose: onRequestClose,
    contentLabel: "Modal \"".concat(title || '', "\"")
  }, React.createElement("div", {
    className: innerWrapperClass || null,
    style: {
      backgroundImage: "url(".concat(bgImage, ")")
    }
  }, React.createElement("div", {
    className: "slide-pane__header ".concat(headerClass || '')
  }, isCloseIconVisible ? React.createElement("div", {
    className: "slide-pane__close",
    onClick: onRequestClose
  }, closeIcon ? closeIcon : React.createElement(IconClose, null)) : null, React.createElement("div", {
    className: "slide-pane__title-wrapper ".concat(wrapperClass)
  }, title)), React.createElement("div", {
    className: "slide-pane__content ".concat(contentClass || '')
  }, children)));
}
ReactSlidingPane.propTypes = {
  bgImage: PropTypes.string,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  closeIcon: PropTypes.any,
  contentClass: PropTypes.string,
  from: PropTypes.oneOf(['left', 'right', 'bottom']),
  headerClass: PropTypes.string,
  innerWrapperClass: PropTypes.string,
  isCloseIconVisible: PropTypes.bool,
  isOpen: PropTypes.bool.isRequired,
  onAfterOpen: PropTypes.func,
  onRequestClose: PropTypes.func,
  overlayClassName: PropTypes.string,
  subtitle: PropTypes.any,
  title: PropTypes.any,
  width: PropTypes.string,
  wrapperClass: PropTypes.object
};

function IconClose() {
  return React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 13 22"
  }, React.createElement("path", {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z"
  }));
}

export default ReactSlidingPane;
