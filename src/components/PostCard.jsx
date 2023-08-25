import { Avatar, Button, Flex, HStack, Heading, Image, Stack, Text, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const PostCard = () => {
    return (
        <Flex justify="center" align="center">
            <Stack width="320px" boxShadow="md" borderRadius="xl">
                <Image src="/post.png" alt="image" />
                <Stack p={2}>
                    <HStack>
                        <Avatar size="sm" />
                        <Text fontWeight="600">John Doe</Text>
                        <Text fontSize="xs">Il y a 1 min</Text>
                    </HStack>
                    <VStack align="flex-start">
                        <Heading fontSize="lg">Abonnez-vous à ma chaine</Heading>
                        <Text fontSize="sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, amet.</Text>
                        <Text fontSize="sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, amet.</Text>
                        <Button size="sm" alignSelf="flex-end" as={Link} to="/post">Voir plus</Button>
                    </VStack>
                </Stack>
            </Stack>
        </Flex>
    )
}

export default PostCard