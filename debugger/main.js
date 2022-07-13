const person = {
  hungry: true,

  feed: function () {
    if (hungry) {
      hungry = false;
      alert("Im no longer hungry!");
    }
  },
};

person.feed();
console.log($);
