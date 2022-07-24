import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer
} from "@chakra-ui/react";
import BrandIcon from "../../asset/Icon/BrandIcon";

import UserIcon from "../../asset/Icon/UserIcon";
import Slidebar from "../../Pages/SlidebarMenu/Slidebar";

export default function Navbar() {
  return (
    <Box bg="black">
      <Flex gap="1rem" p="1rem" borderBottom="1px" borderColor="gray.700">
        <Box height="6opx" w="10%" h="2%">
          <BrandIcon />
        </Box>
        <Spacer />
        <Box>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<UserIcon />}
              variant="outline"
            />
            <MenuList>
              <MenuItem>New Tab</MenuItem>
              <MenuItem>New Window</MenuItem>
            </MenuList>
          </Menu>
        </Box>
        <Box>
          <Slidebar
            pageWrapId={"page-wrap"}
            outerContainerId={"outer-container"}
          />
        </Box>
      </Flex>
    </Box>
  );
}
