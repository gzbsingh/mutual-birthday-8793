import { ChevronDownIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Img,
  Heading,
  Input,
  Flex,
  IconButton,
  InputGroup,
  InputLeftElement,
  InputLeftAddon,
  InputRightAddon,
  Stack,
  styled,
  Select,
  MenuItem,
  FormControl,
  Menu,
  MenuButton,
  MenuList,
  Button
} from "@chakra-ui/react";

import { useState } from "react";

import "react-datepicker/dist/react-datepicker.css";
import CheckIn from "../asset/Icon/CheckIn";
import CheckOut from "../asset/Icon/CheckOut";
import "./Css/Search.css";
import DatePicker from "react-datepicker";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function SearchSection() {
  const [startDate, setStartDate] = useState(new Date());

  const [value, setValue] = useState([null, null]);
  const [guest, setGuest] = useState("");
  const [query2, setQuery2] = useState("");
  // const dispatch = useDispatch();

  const payload = {
    location: query2,
    checkinDate: value[0],
    checkOutDate: value[1],
    noOfGuest: guest
  };

  const handleGuest = (event) => {
    setGuest(event.target.value);
  };

  const handleSubmit = () => {
    // const pricingAction = setPriceVariables(payload);
    // dispatch(pricingAction);
  };
  return (
    <Box className=".uk-cover-container">
      <Img
        className="bg_image"
        src="https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg"
        h="auto"
      />
      <Box className="uk-overlay-primary uk-position-cover"></Box>

      <Box className="middle">
        <Heading as="h1" size="4xl" fontWeight="bold" color="white">
          Book <space />
          <span style={{ textDecoration: "line-through" }}>Hotels</span>
          <space /> Vacation Rentals Top Holiday Homes - Villas, Apartments &
          Homestays
        </Heading>
        <Stack>
          <Flex>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<Search2Icon mt="10px" />}
              />
              <Input
                w="150px"
                h="30px"
                type="text"
                placeholder="Location"
                textAlign="center"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<CheckIn />} />
              {/* <Input 
                type="text"
                w="150px"
                h="30px"
                placeholder="Check in"
                textAlign="center"
              /> */}{" "}
              <DatePicker
                dateFormat="yyyy/MM/dd"
                className="cal-1"
                onChange={() => {
                  setStartDate(new Date());
                }}
                minDate={new Date()}
                todayButton={"Today"}
                placeholderText="Check-In"
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<CheckOut />} />
              <DatePicker
                dateFormat="yyyy/MM/dd"
                className="cal-1"
                onChange={() => {
                  setStartDate(new Date());
                }}
                minDate={new Date()}
                todayButton={"Today"}
                placeholderText="Check-Out"
              />
            </InputGroup>

            {/* <InputLabel
                    size="small"
                    id="guest-select-label"
                    className={homeSearchStyles.guestInput}
                  >
                    Select Guests
                  </InputLabel> */}

            <Menu className="Menu_cl">
              <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                Select Guests
              </MenuButton>
              <MenuList>
                {/* <MenuItem>1 guest</MenuItem> */}
                {/* <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
    <MenuItem>Delete</MenuItem>
    <MenuItem>Attend a Workshop</MenuItem> */}
                {new Array(10).fill(0).map((item, index) => {
                  return (
                    <MenuItem key={`${index}gsts`} value={index + 1}>
                      {index + 1} Guests
                    </MenuItem>
                  );
                })}
              </MenuList>
            </Menu>
            <Link to="search">
              <button className="cal-1 button_S">Search</button>
            </Link>
          </Flex>
        </Stack>
      </Box>
    </Box>
  );
}
