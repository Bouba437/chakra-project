import { Button, Checkbox, Container, Flex, FormControl, FormLabel, GridItem, HStack, Heading, Input, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';

const YourDetails = () => {
    return (
        <VStack w="full" h="full" p={10} spacing={10} align="flex-start">
            <VStack spacing={2} align="flex-start">
                <Heading>Vos infos</Heading>
                <Text>Avez-vous un compte ? Cliquez ici pour vous connecter...</Text>
            </VStack>
            <SimpleGrid columns={2} columnGap={3} rowGap={4}>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Prénom</FormLabel>
                        <Input placeholder="Votre prénom" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Nom</FormLabel>
                        <Input placeholder="Votre nom" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <FormLabel>Adresse</FormLabel>
                        <Textarea placeholder="Votre adresse..." />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Ville</FormLabel>
                        <Input placeholder="Votre ville" />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={1}>
                    <FormControl>
                        <FormLabel>Pays</FormLabel>
                        <Select placeholder="Votre pays">
                            <option value="mali">Mali</option>
                            <option value="mali">France</option>
                        </Select>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <FormControl>
                        <Checkbox>Expédier à l'adresse de facturation</Checkbox>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={2}>
                    <Button variant="primary" width="full" size="lg">Valider les infos</Button>
                </GridItem>
            </SimpleGrid>
        </VStack>
    )
}

export default YourDetails