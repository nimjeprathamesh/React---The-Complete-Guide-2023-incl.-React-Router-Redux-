import { Box, Divider, Flex, Heading, Img, List, ListItem, Text } from '@chakra-ui/react';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTheme } from '../../../../hooks/useTheme.jsx';
import './InnerArea.css';

export default function InnerArea() {
    const {themeCss} = useTheme();

    return (
        <Box className="description_area" style={themeCss}>
            <Box className="inner-box">
                <Heading as='h1'>COUNTRIES WHERE OUR PRODUCT SUPPLY.</Heading>
                <Divider className="horizontal" />
                <Flex justifyContent='space-between'>
                    <Box>
                        <Text as='p'>
                            Dolor sit amet, consectetur adipiscing elit. Vivamus eu pharetra ex. Etiam eget diam ligula. Sed at blandit ante. Vivamus feugiat, lacus eu suscipit mattis, tortor mi aliquam leo, quis laoreet ante sem sed sapien. Phasellus id convallis ligula. Aliquam erat volutpat Aliquam erat volutpat.
                        </Text>
                        <List>
                            <ListItem>
                                <FontAwesomeIcon icon={faCircle} id="icon" />We test your design with real users, analyze their feedback, and prioritize recommended improvements.
                            </ListItem>
                            <ListItem>
                                <FontAwesomeIcon icon={faCircle} id="icon" />Understand long-term interaction and conversion cycles by collecting user diary entries over time and provide her the long term membership.
                            </ListItem>
                            <ListItem>
                                <FontAwesomeIcon icon={faCircle} id="icon" />Discover user motivations and expectations with in-depth conversations, analyzed by experts to extract insights.
                            </ListItem>
                        </List>
                    </Box>
                    <Box>
                        <Img src={require("../../../../images/about.jpg")} alt='About' />
                    </Box>
                </Flex>
            </Box>
        </Box>
    );
}