import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
	location: config.locationType
});

Router.reopen({

});

Router.map(function() {

	this.route( 'login' );

	this.route( 'admin', { path: '/' }, function() {
		this.route( 'media' );
		this.route( 'pages', function() {
			this.route( 'edit', { path: '/:page_id' } );
		});
	});

});

export default Router;
