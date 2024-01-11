import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Avatar,
} from "@chakra-ui/react";
const HeaderAvatar = ({ displayName, email, photoURL, HandleSignOut }) => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <div className="cursor-pointer  rounded-full shadow-2xl ">
            <Avatar
              size="md"
              name={displayName ? displayName : "User"}
              src={photoURL}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>
            <div className="flex flex-col ">
              {" "}
              <b>{displayName}</b>
              <span>{email}</span>
            </div>
          </PopoverHeader>
          <PopoverBody>
            <button
              onClick={() => {
                HandleSignOut();
              }}
              className="bg-red-600 rounded-sm p-1  px-3 "
            >
              {" "}
              Sign Out
            </button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default HeaderAvatar;
