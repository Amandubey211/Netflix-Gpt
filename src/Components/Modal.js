import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { LuInfo } from "react-icons/lu";
import MovieInfo from "./MovieInfo";

function MyModal({ title, movie, releasedate }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <button className="p-3  px-7 border-2 rounded-md    " onClick={onOpen}>
        <span className="flex justify-center gap-2 items-center">
          <LuInfo className="text-3xl " />
          <span>More Info </span>
        </span>
      </button>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="flex justify-between  gap-4 items-start">
              <b className="text-xs sm:text-2xl">{title}</b>{" "}
              {/* <span className="bg-red-500 text-xs sm:text-lg  rounded-md p-1 px-3">
                {releasedate}
              </span> */}
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MovieInfo movie={movie} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default MyModal;
