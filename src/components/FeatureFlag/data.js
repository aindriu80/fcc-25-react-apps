const dummyAPIResponse = {
  showLightAndDarkMode: true,
  showTickTackToeBoard: true,
  randomColourGenerator: false,
  showAccordian: false,
  showTreeView: true,
  SearchAutoComplete: true,
};

function featureFlagsDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500);
    else reject('Some error occured! Please try again');
  });
}
export default featureFlagsDataServiceCall;
