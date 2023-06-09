const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/productsAPI');

var path = require('path');
var Product = require(path.resolve('./models/productModel'));

var products = [
	{
		id: '7379095',
		type: 'product',
		attributes: {
			name: 'Playmobil 5205 Luxury Yacht Playset',
			price: 14.99,
			wasPrice: 34.99,
			avgRating: 4.900008,
			reviewsCount: 8,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Less Than Half Price',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '6258540',
		type: 'product',
		attributes: {
			name: 'Mrs. Potato Head',
			price: 10.99,
			wasPrice: 0,
			avgRating: 4.400028,
			reviewsCount: 28,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['2_for_15'] }
		}
	},
	{
		id: '6064617',
		type: 'product',
		attributes: {
			name: 'Mini Stretch Armstrong',
			price: 9.99,
			wasPrice: 0,
			avgRating: 3.600037,
			reviewsCount: 37,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Our Lowest Price',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '1737066',
		type: 'product',
		attributes: {
			name: 'Minecraft 3 inch Action Figure Assortment',
			price: 8.99,
			wasPrice: 0,
			avgRating: 4.200078,
			reviewsCount: 78,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['2_for_15'] }
		}
	},
	{
		id: '5489183',
		type: 'product',
		attributes: {
			name: 'Trolls Poppy Styling Troll',
			price: 32.99,
			wasPrice: 0,
			avgRating: 4.800052,
			reviewsCount: 52,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: false,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '5589997',
		type: 'product',
		attributes: {
			name: 'Fisher-Price Imaginext DC Super Friends Batcave Gift Set',
			price: 35.99,
			wasPrice: 39.99,
			avgRating: 4.800141,
			reviewsCount: 141,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Save 10%',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '7257179',
		type: 'product',
		attributes: {
			name: 'PAW Patrol Rescue Marshall Pup and Truck',
			price: 13.99,
			wasPrice: 0,
			avgRating: 4.800023,
			reviewsCount: 23,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '7199536',
		type: 'product',
		attributes: {
			name: 'Chad Valley Talk and Touch T-Rex',
			price: 10.99,
			wasPrice: 0,
			avgRating: 4.800012,
			reviewsCount: 12,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['2_for_15'] }
		}
	},
	{
		id: '7308231',
		type: 'product',
		attributes: {
			name: 'Playmobil 5837 History Roman Arena',
			price: 26.99,
			wasPrice: 0,
			avgRating: 4.80004,
			reviewsCount: 40,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['wow_great_price'] }
		}
	},
	{
		id: '7254268',
		type: 'product',
		attributes: {
			name: 'Tsum Tsum Case with 8 Squishes',
			price: 17.99,
			wasPrice: 0,
			avgRating: 4.400027,
			reviewsCount: 27,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['2_for_30'] }
		}
	},
	{
		id: '7363386',
		type: 'product',
		attributes: {
			name: 'Glam Goo Deluxe Slime Pack',
			price: 29.99,
			wasPrice: 0,
			avgRating: 4.700003,
			reviewsCount: 3,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: false,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['wow_great_price'], BADGE_PRODUCT: ['limited_stock'] }
		}
	},
	{
		id: '7379428',
		type: 'product',
		attributes: {
			name: 'Playmobil 5187 Police Truck with Speedboat',
			price: 19.99,
			wasPrice: 0,
			avgRating: 4.700019,
			reviewsCount: 19,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '6991089',
		type: 'product',
		attributes: {
			name: "PAW Patrol Super Rubble's Crane Vehicle",
			price: 13.99,
			wasPrice: 0,
			avgRating: 4.800013,
			reviewsCount: 13,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: false,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '6735575',
		type: 'product',
		attributes: {
			name: 'Transformers Premier Edition Deluxe Bumblebee',
			price: 24.99,
			wasPrice: 0,
			avgRating: 4.000007,
			reviewsCount: 7,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '3147551',
		type: 'product',
		attributes: {
			name: 'Transformers Robots in Disguise One Step Changers',
			price: 11.99,
			wasPrice: 0,
			avgRating: 3.800115,
			reviewsCount: 115,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['2_for_15'] }
		}
	},
	{
		id: '7454460',
		type: 'product',
		attributes: {
			name: 'Hatchimals Surprise Giraven',
			price: 54.99,
			wasPrice: 0,
			avgRating: 4.800065,
			reviewsCount: 65,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: false,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '6990035',
		type: 'product',
		attributes: {
			name: 'Stretch Screamers',
			price: 19.99,
			wasPrice: 0,
			avgRating: 4.600017,
			reviewsCount: 17,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Our Lowest Price',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '6059378',
		type: 'product',
		attributes: {
			name: 'PJ Masks Deluxe Vehicle & Cat Boy 3 inch Figure',
			price: 19.99,
			wasPrice: 0,
			avgRating: 4.800103,
			reviewsCount: 103,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Our Lowest Price',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '7345555',
		type: 'product',
		attributes: {
			name: 'WWE Crash Cage Playset and Triple H Figure',
			price: 34.99,
			wasPrice: 49.99,
			avgRating: 4.800019,
			reviewsCount: 19,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Save £15.00',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '6311638',
		type: 'product',
		attributes: {
			name: 'Playmobil 5648 City Action Police Carry Case Playset',
			price: 8.79,
			wasPrice: 10.99,
			avgRating: 4.600019,
			reviewsCount: 19,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Save 20%',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['2_for_15'] }
		}
	},
	{
		id: '7197514',
		type: 'product',
		attributes: {
			name: 'PJ Masks Headquarters Playset',
			price: 39.99,
			wasPrice: 49.99,
			avgRating: 4.40004,
			reviewsCount: 40,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: false,
			specialOfferText: 'Save 20%',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '7196883',
		type: 'product',
		attributes: {
			name: 'Zombie Blast',
			price: 19.99,
			wasPrice: 0,
			avgRating: 4.500011,
			reviewsCount: 11,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Our Lowest Price',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '7258398',
		type: 'product',
		attributes: {
			name: 'Minecraft Deluxe Overworld Pack',
			price: 29.99,
			wasPrice: 0,
			avgRating: 4.800015,
			reviewsCount: 15,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Our Lowest Price',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['wow_great_price'] }
		}
	},
	{
		id: '7239324',
		type: 'product',
		attributes: {
			name: "PAW Patrol Skye's Flyin' Vehicles.",
			price: 13.99,
			wasPrice: 0,
			avgRating: 4.600018,
			reviewsCount: 18,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '7287118',
		type: 'product',
		attributes: {
			name: 'Playmobil 6865 City Life School House',
			price: 15.99,
			wasPrice: 19.99,
			avgRating: 4.800017,
			reviewsCount: 17,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Save 20%',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['wow_great_price'] }
		}
	},
	{
		id: '7194373',
		type: 'product',
		attributes: {
			name: 'PAW Patrol Racers Gift Set - 6 Pack',
			price: 29.99,
			wasPrice: 0,
			avgRating: 4.700037,
			reviewsCount: 37,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: false,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '7246393',
		type: 'product',
		attributes: {
			name: 'PAW Patrol Mission Chase',
			price: 34.99,
			wasPrice: 0,
			avgRating: 4.700033,
			reviewsCount: 33,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: 'Our Lowest Price Ever',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: { BADGE_VALUE: ['wow_great_price'] }
		}
	},
	{
		id: '2482729',
		type: 'product',
		attributes: {
			name: 'Shopkins 12 Pack - Series 8',
			price: 9.99,
			wasPrice: 0,
			avgRating: 4.700396,
			reviewsCount: 396,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '6348326',
		type: 'product',
		attributes: {
			name: "Pokemon Throw 'N' Pop Poke Ball Assortment",
			price: 10.99,
			wasPrice: 0,
			avgRating: 4.300042,
			reviewsCount: 42,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	},
	{
		id: '2449243',
		type: 'product',
		attributes: {
			name: 'Peppa Pig Air Peppa Jet',
			price: 16.99,
			wasPrice: 0,
			avgRating: 4.600103,
			reviewsCount: 103,
			deliverable: true,
			reservable: true,
			freeDelivery: false,
			fastTrack: true,
			specialOfferText: '',
			hasVariations: false,
			hasMultiplePrices: false,
			variants: {},
			badge: {}
		}
	}
];

Product.collection.insert(products, onInsert);

function onInsert(err, docs) {
	if (err) {
		// TODO: handle error
	} else {
		console.info(docs);
	}
}
