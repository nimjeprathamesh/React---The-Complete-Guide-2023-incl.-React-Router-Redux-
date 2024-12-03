import { Box } from '@chakra-ui/react';
import LowerFooter from './LowerFooter/LowerFooter.jsx';
import MiddleFooter from './MiddleFooter/MiddleFooter.jsx';
import UpperFooter from './UpperFooter/UpperFooter.jsx';

export default function Footer({destinations, packages}) {
    return (
        <Box id="footer">
			<UpperFooter />
			<MiddleFooter destinations={destinations} packages={packages} />
			<LowerFooter />
		</Box>
    );
}