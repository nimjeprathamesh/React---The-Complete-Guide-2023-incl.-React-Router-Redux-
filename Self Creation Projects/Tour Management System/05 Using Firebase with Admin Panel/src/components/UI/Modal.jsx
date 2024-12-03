import { AlertDialog, AlertDialogBody, AlertDialogCloseButton, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from '@chakra-ui/react';
import { useRef } from 'react';

export default function Modal({isOpen, onClose, onConfirm, children}) {
    const cancelRef = useRef();
    
    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
            <AlertDialogOverlay
                sx={{
                    bg: 'blackAlpha.300',
                    backdropFilter: 'blur(10px) hue-rotate(90deg)',
                }}
            >
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                        Delete {children}
                    </AlertDialogHeader>
                    <AlertDialogCloseButton />
                    <AlertDialogBody>
                        Are you sure? You can't undo this action afterwards.
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='red' onClick={onConfirm} ml={3}>
                            Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}