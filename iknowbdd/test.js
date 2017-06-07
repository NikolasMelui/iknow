describe( 'Тест функции pow', function () {
  describe( 'Возводит x в степень n', function () {

    before(function () {
      alert('Start test!');
    });

    after(function () {
      alert('Stop test!');
    });

    // beforeEach(function() {
    //   alert('Вход в тест');
    // });
    //
    // afterEach(function() {
    //   alert('Выход из теста');
    // });

    function makeTests (x, n) {
      var y = 1;
      for(var i = 0; i < n; i++) {
        y *= x;
      }

      it('Возводит ' + x + ' в степень ' + n, function () {
        assert.equal(pow(x, n), y);
      });
    }

    for(var i = 1; i < 10; i++) {
      for(var j = 1; j < 10; j++) {
        makeTests(i, j);
      }
    }
  });
});
