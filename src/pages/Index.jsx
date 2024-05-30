import { Container, VStack, Box, Heading, Text, Input, Textarea, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      setPosts([{ title, content }, ...posts]);
      setTitle("");
      setContent("");
    }
  };

  return (
    <Container maxW="container.lg" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={6} justifyContent="center">
        <Heading size="lg">Public Postboard</Heading>
      </Flex>
      <VStack spacing={6}>
        <Box as="form" onSubmit={handleSubmit} w="100%" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
          <Heading size="md" mb={4}>Create a Post</Heading>
          <Input
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            mb={3}
          />
          <Textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            mb={3}
          />
          <Button type="submit" colorScheme="blue" w="100%">Submit</Button>
        </Box>
        <VStack spacing={4} w="100%">
          {posts.length === 0 ? (
            <Text>No posts yet. Be the first to post!</Text>
          ) : (
            posts.map((post, index) => (
              <Box key={index} w="100%" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
                <Heading size="md">{post.title}</Heading>
                <Text mt={2}>{post.content}</Text>
              </Box>
            ))
          )}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;