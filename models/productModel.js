var mongoose = require("mongoose")
    Schema = mongoose.Schema;

var productSchema = new Schema({
    id: {
		type: 'String'
	},
	type: {
		type: 'String'
	},
	attributes: {
		name: {
			type: 'String'
		},
		price: {
			type: 'Number'
		},
		wasPrice: {
			type: 'Number'
		},
		avgRating: {
			type: 'Number'
		},
		reviewsCount: {
			type: 'Number'
		},
		deliverable: {
			type: 'Boolean'
		},
		reservable: {
			type: 'Boolean'
		},
		freeDelivery: {
			type: 'Boolean'
		},
		fastTrack: {
			type: 'Boolean'
		},
		specialOfferText: {
			type: 'String'
		},
		hasVariations: {
			type: 'Boolean'
		},
		hasMultiplePrices: {
			type: 'Boolean'
		},
		variants: {},
		badge: {}
	}
});

module.exports = mongoose.model("Product", productSchema);