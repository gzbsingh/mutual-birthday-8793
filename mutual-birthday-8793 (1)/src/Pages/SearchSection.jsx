import { Box, Img } from "@chakra-ui/react";
import "./Css/Search.css";
export default function SearchSection() {
  return (
    <Box>
      <Box boxSize="sm">
        <Img
          className="bg_image"
          src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg"
        />
        <Box className="uk-overlay-primary uk-position-cover"></Box>
      </Box>
    </Box>
  );
}
