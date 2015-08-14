import Ember from 'ember';
import AuthenticatedRouteMixinMixin from '../../../mixins/authenticated-route-mixin';
import { module, test } from 'qunit';

module('Unit | Mixin | authenticated route mixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var AuthenticatedRouteMixinObject = Ember.Object.extend(AuthenticatedRouteMixinMixin);
  var subject = AuthenticatedRouteMixinObject.create();
  assert.ok(subject);
});
