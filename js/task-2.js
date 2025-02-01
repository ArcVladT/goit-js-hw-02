function formatMessage(message, maxLength) {
  if (message.length <= maxLength) {
    return message;
  } else if (message.length > maxLength) {
    messageCut = message.slice(0, maxLength) + "...";
    return messageCut;
  }
}
