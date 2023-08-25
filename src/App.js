import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import PostPage from './pages/PostPage';
import CartPage from './pages/CartPage';
import NavBar from './components/navigation/NavBar';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" index element={<Home />} />
                <Route path="/post" element={<PostPage />} />
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
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
