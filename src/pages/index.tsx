import {
  Button,
  Grid,
  GridItem,
  Heading,
  Highlight,
  HStack,
  Icon,
  Text,
} from "@chakra-ui/react";
import { LuSchool } from "react-icons/lu";

export default function Home() {
  return (
    <Grid templateColumns="repeat(5, 1fr)" gap="6">
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
            <Button>Explore Now</Button>
            <Button>Learn More</Button>
          </HStack>
        </Grid>
      </GridItem>
      <GridItem colSpan={2} margin="auto">
        <Icon width="300px" height="300px" color="secondary">
          <LuSchool />
        </Icon>
      </GridItem>
    </Grid>
  );
}
