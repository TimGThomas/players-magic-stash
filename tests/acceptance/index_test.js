import Index from 'appkit/routes/index';
import App from 'appkit/app';

module("Acceptances - Index", {
  setup: function(){
    App.reset();
  }
});

test("index renders", function(){
  expect(2);

  visit('/').then(function(){
    ok(exists("h1:contains('Magic Stash: Player')"));
    ok(exists('a:contains("Character")'));
  });
});
