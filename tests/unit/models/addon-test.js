import { moduleForModel, test } from 'ember-qunit';

moduleForModel('addon', 'Unit | Model | addon', {
  // Specify the other units that are required for this test.
  needs: []
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
