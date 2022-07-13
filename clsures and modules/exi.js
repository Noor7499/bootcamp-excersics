const StringFormatter = function () {
  const skewerCase = function (text) {
    console.log(text.replace(" ", "/"));
  };
  const capitalizeFirst = function (text) {
    console.log(
      text.substring(0, 1).toUpperCase() + text.substring(1, text.length - 1)
    );
  };
  return {
    capitalizeFirst: capitalizeFirst,
    skewerCase: skewerCase,
  };
};
const formatter = StringFormatter();
formatter.capitalizeFirst("dorothy"); //should print Dorothy
formatter.skewerCase("blue box"); //should print blue-box
React;
Reply;
