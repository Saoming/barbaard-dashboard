import { Button } from "@chakra-ui/button"
import { useDisclosure } from "@chakra-ui/hooks"
import { Box } from "@chakra-ui/layout"
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/modal"
import React, { useState } from "react"

interface NewButton {
    buttonName: string;
    modalTitle: string;
}

export const NewButton: React.FC<NewButton> = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    
    return (
            <Box maxWidth="200px">
                <Button colorScheme="blue" onClick={onOpen}> {props.buttonName} </Button>
                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>{props.modalTitle}</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            Something
                        </ModalBody>
                    </ModalContent>
                </Modal>
            </Box>
    )
}