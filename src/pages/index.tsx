import {
  Button,
  Grid,
  GridItem,
  Heading,
  Highlight,
  HStack,
  Input,
  Text,
} from "@chakra-ui/react";
import NextImage from "next/image";
import spaceCat from "../../public/space-cat.png";
import {
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "@/components/ui/popover";
import Calendar from "@/components/Datepicker";
import { useState } from "react";
import { InputGroup } from "@/components/ui/input-group";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={8}>
        <GridItem colSpan={3}>
          <Grid rowGap="6">
            <Heading size="6xl" color="text-primary">
              <Highlight
                query="Lerne neue Skills"
                styles={{ color: "primary" }}
              >
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
      <PopoverRoot
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        onInteractOutside={() => setOpen(false)}
        // closeOnInteractOutside
        autoFocus={false}
        lazyMount
      >
        <PopoverTrigger
        // asChild={triggerasChild}
        >
          Trigger
        </PopoverTrigger>
        {/* <LazyHydrateWrapper>*/}
        <PopoverContent
          height="200px"
          // ref={popoverReference}
        >
          <PopoverBody>
            <DatepickerPopover />
            <DatepickerPopover />
          </PopoverBody>
        </PopoverContent>
        {/* </LazyHydrateWrapper>  */}
      </PopoverRoot>
    </>
  );
}

const DatepickerPopover: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <PopoverRoot
      open={open}
      onOpenChange={(e) => setOpen(e.open)}
      onInteractOutside={() => setOpen(false)}
      // closeOnInteractOutside
      autoFocus={false}
      lazyMount
    >
      <PopoverTrigger
        width="50%"
        // asChild={triggerasChild}
      >
        <InputGroup>
          <Input
            variant="outline"
            // value
            // onChange
            // onFocus={() => (inputHasFocus.current = true)}
            // onBlur={() => (inputHasFocus.current = false)}
            // readOnly Device abhängig
          />
        </InputGroup>
      </PopoverTrigger>
      {/* <LazyHydrateWrapper>*/}
      <PopoverContent
      // ref={popoverReference}
      >
        <PopoverBody>
          <Calendar setOpen={setOpen} />
        </PopoverBody>
      </PopoverContent>
      {/* </LazyHydrateWrapper>  */}
    </PopoverRoot>
  );
};
