import {
  Button,
  Grid,
  GridItem,
  Heading,
  Highlight,
  HStack,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import spaceCat from "../../public/space-cat.png";

export default function Home() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={8}>
      <GridItem colSpan={3}>
        <Grid rowGap="6">
          <Heading size="6xl" color="text-primary">
            <Highlight query="Lerne neue Skills" styles={{ color: "primary" }}>
              Lerne neue Skills ganz einfach von zu Hause
            </Highlight>
          </Heading>
          <Text fontSize="xl" color="text-secondary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua.
          </Text>
          <HStack gap={4}>
            <Button variant="primary">Explore Now</Button>
            <Button variant="secondary">Learn More</Button>
          </HStack>
        </Grid>
      </GridItem>
      <GridItem colSpan={2} textAlign="right">
        <NextImage alt="" src={spaceCat} width={500} />
      </GridItem>
    </Grid>
  );
}
