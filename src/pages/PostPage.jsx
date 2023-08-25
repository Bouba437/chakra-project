import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Avatar, Box, Container, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const PostPage = () => {
    return (
        <Container maxW="container-xl">
            <Stack spacing={8} mt={8}>
                <Heading fontSize="2xl" textTransform="capitalize">Abonnez-vous à ma chaîne</Heading>
                <Image src="./big_image.png" />
                <HStack>
                    <Avatar name="Boubacar Diarra" size="sm" />
                    <Text fontWeight="600">John Doe</Text>
                    <Text fontSize="xs">Il y a 1 min</Text>
                </HStack>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum voluptates, laudantium veniam, consequuntur quam placeat ad expedita ut corporis minima. Rem, non accusamus nostrum pariatur ad nesciunt quisquam assumenda, quo iusto beatae magni reiciendis dicta ipsum tempore ipsa cumque labore quasi aspernatur laboriosam! Quibusdam, ducimus minus. Exercitationem, sequi veniam.
                </Text>
                <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum voluptates, laudantium veniam, consequuntur quam placeat ad expedita ut corporis minima. Rem, non accusamus nostrum pariatur ad nesciunt quisquam assumenda, quo iusto beatae magni reiciendis dicta ipsum tempore ipsa cumque labore quasi aspernatur laboriosam! Quibusdam, ducimus minus. Exercitationem, sequi veniam.
                </Text>
                <Accordion>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton>
                                <Box as="span" flex='1' textAlign='left'>
                                Section 2 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Stack>
        </Container>
    )
}

export default PostPage