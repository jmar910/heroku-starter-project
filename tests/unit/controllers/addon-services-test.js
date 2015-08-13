import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:addon-services', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('filterModels action sets filterType property', function(assert) {
  assert.expect(2);
  let ctrl = this.subject();

  assert.equal(ctrl.get('filterType'), 'all');

  ctrl.send('filterModels', 'beta');

  assert.equal(ctrl.get('filterType'), 'beta');
});

test('_searchFilter returns text filtered models', function(assert) {
  let ctrl = this.subject();
  let filepicker = Ember.Object.create({ humanName: 'Filepicker'});
  let newrelic = Ember.Object.create( { humanName: 'New Relic'} );
  let postgres = Ember.Object.create( { humanName: 'PostgreSQL'});

  let model = [ filepicker, newrelic, postgres ];

  ctrl.set('model', model);
  ctrl.set('filterText', 'file');

  let searchFilteredModels = ctrl._searchFilter();

  assert.deepEqual(searchFilteredModels, [ filepicker ]);
});
