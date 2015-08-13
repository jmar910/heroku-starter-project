import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('filter-link', 'Integration | Component | filter link', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{filter-link}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#filter-link}}
      template block text
    {{/filter-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('clicking on the component', function(assert) {
  assert.expect(2);

  let allType = 'all';

  this.set('type', allType);
  this.set('currentFilterType', allType);

  this.render(hbs`
    {{#filter-link type=type currentFilterType=currentFilterType theAction='assertAction'}}
      SHOW ALL
    {{/filter-link}}
  `);

  this.on('assertAction', function(type) {
    assert.ok(true);
    
    assert.equal(type, allType);
  });

  this.$('.filter-link').click();

});

test('active class is added', function(assert) {
  assert.expect(2);

  let allType = 'all';
  let betaType = 'beta';

  this.set('type', allType);
  this.set('currentFilterType', betaType);

  this.render(hbs`
    {{#filter-link type=type currentFilterType=currentFilterType theAction='assertAction'}}
      SHOW ALL
    {{/filter-link}}
  `);

  let $component = this.$('.filter-link');

  assert.ok(!$component.hasClass('active'));

  this.set('currentFilterType', allType);

  assert.ok($component.hasClass('active'));

});
