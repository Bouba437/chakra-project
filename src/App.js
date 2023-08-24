import logo from './logo.svg';
import './App.css';
import { Button, Checkbox, Container, Flex, FormControl, FormLabel, GridItem, HStack, Heading, Input, Select, SimpleGrid, Text, Textarea, VStack } from '@chakra-ui/react';
import YourDetails from './components/YourDetails';
import Cart from './components/Cart';

function App() {
    return (
        <Container maxW="container.xl" p="10">
            <Flex 
                h={{ base: "auto", md: "100vh" }}
                py={[0, 10, 20]}
                direction={{
                    base: "column-reverse",
                    md: "row",
                }}
            >
                <YourDetails />
                <Cart />
            </Flex>
        </Container>
    );
}

export default App;


// import logo from './logo.svg';
// import './App.css';
// import { Container, Flex, FormControl, FormLabel, GridItem, HStack, Heading, Input, SimpleGrid, Text, VStack } from '@chakra-ui/react';

// function App() {
//     return (
//         <Container maxW="container.lg" p="1">
//             <Flex h="100vh" py={20}>
//                 <VStack w="full" h="full" p={10} spacing={10} align="flex-start">
//                     <VStack spacing={2} align="flex-start">
//                         <Heading>Vos infos</Heading>
//                         <Text>Avez-vous un compte ? Cliquez ici pour vous connecter...</Text>
//                     </VStack>
//                     <HStack spacing={3}>
//                         <FormControl>
//                             <FormLabel>Prénom</FormLabel>
//                             <Input placeholder="Votre prénom" />
//                         </FormControl>
//                         <FormControl>
//                             <FormLabel>Nom</FormLabel>
//                             <Input placeholder="Votre nom" />
//                         </FormControl>
//                     </HStack>
//                     <GridItem colSpan={2}>
//                         <FormControl>
//                             <FormLabel>Nom</FormLabel>
//                             <Input placeholder="Votre nom" />
//                         </FormControl>
//                     </GridItem>
//                 </VStack>
//                 <VStack bg="gray.200" w="full" h="full" p={10} spacing={10} align="flex-start">
                    
//                 </VStack>
//             </Flex>
//         </Container>
//     );
// }

// export default App;
