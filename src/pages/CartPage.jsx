import { Container, Flex } from '@chakra-ui/react'
import YourDetails from '../components/YourDetails'
import Cart from '../components/Cart'

const CartPage = () => {

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
    )
}

export default CartPage