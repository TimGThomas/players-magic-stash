import Index from 'appkit/routes/index';
import App from 'appkit/app';

module("Acceptances - Index", {
  setup: function(){
    App.reset();
  }
});

/*
test("index renders", function(){
  expect(3);

  visit('/').then(function(){
    ok(exists("h1:contains('Magic Stash: Player')"));

    var list = find("ul li");
    equal(list.length, 3);
    equal(list.text(), "redyellowblue");
  });
});
*/