import React from 'react'
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
const HeaderAvatar = ({ displayName, photoURL, HandleSignOut }) => {
  return (
    <div>
      <Popover isLazy placement="left-start">
        <PopoverTrigger>
          <div className="cursor-pointer rounded-full shadow-2xl ">
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
          <PopoverHeader>{displayName}</PopoverHeader>
          <PopoverBody>
            <button
              onClick={() => { HandleSignOut() }}
              className="bg-red-600 rounded-sm p-1  px-3 "
            >
              {" "}
              Sign Out
            </button>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default HeaderAvatar
