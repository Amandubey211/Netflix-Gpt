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
      <button
        className="md:p-3 p-1  md:px-7 px-3 border-2 rounded-md    "
        onClick={onOpen}
      >
        <span className="flex justify-center gap-2 items-center">
          <LuInfo className="md:text-3xl text-lg " />
          <span className="text-sm">More Info </span>
        </span>
      </button>

      <Modal size="full" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <div className="flex justify-between  gap-4 items-start">
              <b className="text-xs sm:text-2xl">{title}</b>{" "}
            </div>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="">
              <MovieInfo movie={movie} />
            </div>
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
