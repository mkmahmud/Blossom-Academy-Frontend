export const generateTransactionId = (userId: any, amount: any) => {
  const timestamp = Date.now(); // Get current timestamp

  // Concatenate the userId, amount, and timestamp to create a unique ID
  const transactionId = `${userId}-${amount}-${timestamp}`;

  return transactionId;
};
