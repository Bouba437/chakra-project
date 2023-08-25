import { AspectRatio, Button, Divider, HStack, Heading, Image, Stack, Text, VStack, useColorMode, useColorModeValue } from '@chakra-ui/react';

const Cart = () => {

    const { toggleColorMode } = useColorMode();
    const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
    const textColor = useColorModeValue("gray.600", "whiteAlpha.600");

    return (
        <VStack w="full" h="full" p={10} spacing={6} align="flex-start" bg={bgColor}>
            <VStack alignItems="flex-start" spacing={3}>
                <Heading size="2xl">Votre panier</Heading>
                <Text>
                    Si le prix est trop cher pour vous, {" "}
                    <Button 
                        onClick={toggleColorMode} 
                        variant="outline" 
                        colorScheme="black"
                    >
                        Essaye de changer de thème
                    </Button>
                </Text>
            </VStack>
            <HStack spacing={6} alignItems="center" w="full">
                <AspectRatio ratio={1} width={24}>
                    <Image src="/logo512.png" alt="logo react" />
                </AspectRatio>
                <Stack
                    spacing={0}
                    w="full"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <VStack w="full" spacing={0} alignItems="flex-start">
                        <Heading size="md">Penny board</Heading>
                        <Text color={textColor}>PENYCOMP27541</Text>
                    </VStack>
                    <Heading size="sm" textAlign="end">$119.00</Heading>
                </Stack>
            </HStack>
            <VStack spacing={4} w="full" alignItems="stretch">
                <HStack justifyContent="space-between">
                    <Text color={textColor}>Sous-total</Text>
                    <Heading size="sm">$119.00</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color={textColor}>Livraison</Text>
                    <Heading size="sm">$19.99</Heading>
                </HStack>
                <HStack justifyContent="space-between">
                    <Text color={textColor}>Taxes</Text>
                    <Heading size="sm">$23.80</Heading>
                </HStack>
            </VStack>
            <Divider />
            <HStack justifyContent="space-between" w="full">
                <Text color={textColor}>Total</Text>
                <Heading size="lg">$162.79</Heading>
            </HStack>
        </VStack>
    )
}

export default Cart