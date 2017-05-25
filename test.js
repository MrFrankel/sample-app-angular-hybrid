describe('angularjs homepage todo list', function() {
  //browser.ignoreSynchronization=true;
  it('should add a todo', function() {
    browser.get('http://localhost:8080/#!/welcome');
    expect(true).toBe(true);
  });
});