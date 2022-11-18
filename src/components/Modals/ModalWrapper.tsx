import React from 'react'
import Modal, { Props as ReactModalProps } from 'react-modal'

interface Props extends ReactModalProps {
  isOpen: boolean
}

export const ModalWrapper = ({
  isOpen,
  children,
  ...props
}: React.PropsWithChildren<Props>) => (
  <Modal
    isOpen={isOpen}
    overlayClassName='modal-overlay'
    className='modal-content'
    {...props}
  >
    {children}
  </Modal>
)
