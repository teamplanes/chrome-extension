console.log('This is the background page.');
console.log('Put the background scripts here.');

const userEmail = chrome.identity.getProfileUserInfo(function (info) {
  console.log('info', info);
  return info.email;
});

chrome.extension.onMessage.addListener(function (
  request,
  sender,
  sendResponse
) {
  sendResponse({ email: userEmail });
});
