// Modal.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

// Test 1: Modal is not rendered when isOpen is false
test('does not render modal when isOpen is false', () => {
  render(<Modal isOpen={false} onClose={() => {}} title="Test Modal" />);
  
  // Expect no modal content to be in the document
  const modalElement = screen.queryByRole('dialog');
  expect(modalElement).not.toBeInTheDocument();
});

// Test 2: Modal renders correctly when isOpen is true
test('renders modal when isOpen is true', () => {
  render(<Modal isOpen={true} onClose={() => {}} title="Test Modal" />);
  
  // Expect modal content to be in the document
  const modalElement = screen.getByRole('dialog');
  expect(modalElement).toBeInTheDocument();
  
  // Check for the modal title
  const titleElement = screen.getByText(/test modal/i);
  expect(titleElement).toBeInTheDocument();
});

// Test 3: Clicking the close button calls the onClose function
test('calls onClose when close button is clicked', () => {
  const handleClose = jest.fn();  // Mock function

  render(<Modal isOpen={true} onClose={handleClose} title="Test Modal" />);
  
  // Find the close button and click it
  const closeButton = screen.getByLabelText(/close modal/i);
  fireEvent.click(closeButton);
  
  // Check if the onClose function was called
  expect(handleClose).toHaveBeenCalledTimes(1);
});

// Test 4: Modal renders children correctly
test('renders the children inside the modal', () => {
  render(
    <Modal isOpen={true} onClose={() => {}} title="Test Modal">
      <p>This is the modal content</p>
    </Modal>
  );
  
  // Check if the modal content (children) is displayed
  const modalContent = screen.getByText(/this is the modal content/i);
  expect(modalContent).toBeInTheDocument();
});
