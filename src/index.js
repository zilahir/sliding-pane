import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import './index.css';

const CLOSE_TIMEOUT = 500;

export default function ReactSlidingPane({
    isOpen,
    wrapperClass,
    title,
    onRequestClose,
    onAfterOpen,
    children,
    className,
    overlayClassName,
    closeIcon,
    from = 'right',
    isCloseIconVisible = false,
    headerClass,
    contentClass,
    bgImage,
    innerWrapperClass,
}) {
    const directionClass = `slide-pane_from_${from}`;

    return <Modal
        className={ `slide-pane ${directionClass} ${className || ''}` }
        overlayClassName={ `slide-pane__overlay ${overlayClassName || ''}`}
        closeTimeoutMS={ CLOSE_TIMEOUT }
        isOpen={ isOpen }
        onAfterOpen={ onAfterOpen }
        onRequestClose={ onRequestClose }
        contentLabel={ `Modal "${title || ''}"` }>
        <div className={innerWrapperClass || null} style={{backgroundImage: `url(${bgImage})`}}>
            <div className={`slide-pane__header ${headerClass || ''}`}>
                {
                    isCloseIconVisible ? 
                        <div className='slide-pane__close' onClick={ onRequestClose }>
                            { closeIcon ? closeIcon : <IconClose /> }
                        </div>
                    : null
                }
                <div className={`slide-pane__title-wrapper ${wrapperClass}`}>
                    {
                        title
                    }
                </div>
            </div>
            <div className={`slide-pane__content ${contentClass || ''}`}>
                { children }
            </div>
        </div>
    </Modal>;
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
    wrapperClass: PropTypes.object,
};

function IconClose() {
    return (
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 22'>
            <path fill='currentColor' fillRule='evenodd'
                d='M4 11l8 8c.6.5.6 1.5 0 2-.5.6-1.5.6-2 0l-9-9c-.6-.5-.6-1.5 0-2l9-9c.5-.6 1.5-.6 2 0 .6.5.6 1.5 0 2l-8 8z' />
        </svg>
    );
}
