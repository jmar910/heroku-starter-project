import { moduleForModel, test } from 'ember-qunit';

moduleForModel('addon-service', 'Unit | Serializer | addon service', {
  // Specify the other units that are required for this test.
  needs: ['serializer:addon-service']
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
