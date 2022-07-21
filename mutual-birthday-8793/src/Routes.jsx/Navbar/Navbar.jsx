import { Box,Button, Flex, Spacer  } from "@chakra-ui/react";
import BrandIcon from "../../asset/Icon/BrandIcon";

import UserIcon from "../../asset/Icon/UserIcon";

export default function Navbar(){
  return (
   
      <Box bg="black">
      <Flex gap="1rem" p="1rem" borderBottom="1px" borderColor="gray.700">
       <Box height="6opx" w="10%" h="2%">
      <BrandIcon/>
       </Box>
        <Spacer />
      
        <Button size="xs" variant="ghost">
        <UserIcon />
        </Button>
        
      </Flex>
    </Box>
     
  )
}