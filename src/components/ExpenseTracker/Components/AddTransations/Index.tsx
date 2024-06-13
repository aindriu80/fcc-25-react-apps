import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from '@chakra-ui/react';

const TransactionForm = ({ onClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Transaction</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Enter Description</FormLabel>
            <Input
              placeholder="Enter transaction description"
              name="description"
              type="text"
            />
          </FormControl>
          <FormControl>
            <FormLabel>Enter Amount</FormLabel>
            <Input
              placeholder="Enter transaction amount"
              name="amount"
              type="number"
            />
          </FormControl>
          <RadioGroup mt="5">
            <Radio value="income" colorScheme="blue" name="type">
              Expense
            </Radio>
            <Radio value="expense" colorScheme="red" name="type">
              Income
            </Radio>
          </RadioGroup>
        </ModalBody>
        <ModalFooter>
          <Button mr={'4'} onClick={onClose}>
            Cancel
          </Button>
          <Button>Add</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default TransactionForm;
