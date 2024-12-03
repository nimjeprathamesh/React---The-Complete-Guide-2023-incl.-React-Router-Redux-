import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Text } from '@chakra-ui/react';
import { useRef } from 'react';
import './Modal.css';

export default function Modal({isOpen, onConfirm, message}) {
    const cancelRef = useRef();
    
    return (
        <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onConfirm}>
            <AlertDialogOverlay
                sx={{
                    bg: 'blackAlpha.300',
                    backdropFilter: 'blur(10px) hue-rotate(90deg)',
                }}
            >
                <AlertDialogContent>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold' mt={8} mb={0} pb={0}>
                        <Box className='success-checkmark'>
                            <Box className='check-icon'>
                                <Text as='span' className='icon-line line-tip'></Text>
                                <Text as='span' className='icon-line line-long'></Text>
                                <Box className='icon-circle'></Box>
                                <Box className='icon-fix'></Box>
                            </Box>
                        </Box>
                    </AlertDialogHeader>
                    <AlertDialogHeader fontSize='lg' fontWeight='bold' mt={0} pt={0} width='full' margin='0 10rem'>
                        Good Job!
                    </AlertDialogHeader>
                    <AlertDialogBody mt={0} pt={0} textAlign='center'>
                        {message}
                    </AlertDialogBody>
                    <AlertDialogFooter display='flex' justifyContent='center'>
                        <Button variant='solid' colorScheme='green' ref={cancelRef} onClick={onConfirm}>
                            Ok
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
}