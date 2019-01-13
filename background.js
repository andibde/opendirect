chrome.opendirect.onInputEntered.addListener(
  function(searchTerm) {
    // Encode user input for special characters , / ? : @ & = + $ #
    var encodedText = encodeURIComponent(searchTerm);
    var newURL = 'https://duckduckgo.com/?q=!' + encodedText;
    chrome.tabs.update({ url: newURL });
  });
