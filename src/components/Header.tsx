import {
  BoxProps,
  Flex,
  HStack,
  IconButton,
  Input,
  Spacer,
} from "@chakra-ui/react";
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerRoot,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  LuAlignJustify,
  LuCircleUser,
  LuSearch,
  LuShoppingCart,
  LuX,
} from "react-icons/lu";
import { InputGroup } from "./ui/input-group";
import { useState } from "react";

const Header: React.FC = () => {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);

  return (
    <Flex
      width="100%"
      background="header"
      alignItems="center"
      padding="2"
      position="relative"
      boxShadow="0px 0px 6px 0px rgba(0,0,0,0.75)"
    >
      {isSearchBarOpen ? (
        <SearchBar />
      ) : (
        <>
          <DrawerRoot placement="start">
            <DrawerBackdrop />
            <DrawerTrigger asChild>
              <IconButton variant="header" size="header" aria-label="Open Menu">
                <LuAlignJustify />
              </IconButton>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerCloseTrigger />
              <DrawerBody></DrawerBody>
            </DrawerContent>
          </DrawerRoot>
          <Spacer />
          <HStack>
            <IconButton
              variant="header"
              size="header"
              aria-label="Open Search Bar"
              display={{ base: "flex", lg: "none" }}
              onClick={() => setIsSearchBarOpen(true)}
            >
              <LuSearch />
            </IconButton>
            <SearchBar display={{ base: "none", lg: "flex" }} />
            <IconButton
              variant="header"
              size="header"
              aria-label="Open Account"
            >
              <LuCircleUser />
            </IconButton>
            <DrawerRoot placement="end">
              <DrawerBackdrop />
              <DrawerTrigger asChild>
                <IconButton
                  variant="header"
                  size="header"
                  aria-label="Open Shopping Cart"
                >
                  <LuShoppingCart />
                </IconButton>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerCloseTrigger />
                <DrawerBody></DrawerBody>
              </DrawerContent>
            </DrawerRoot>
          </HStack>
        </>
      )}
    </Flex>
  );
};

const SearchBar: React.FC<BoxProps> = ({ display }) => {
  return (
    <InputGroup
      startElement={<LuSearch />}
      endElement={<LuX />}
      width="50%"
      display={display}
      position="absolute"
      left="50%"
      transform="translateX(-50%)"
    >
      <Input placeholder="Suche nach einem Thema" variant="inverse" />
    </InputGroup>
  );
};

export default Header;
