const INTEGER_SIZE = 64;

function bitflag (bit) {
	if ( !(bit >= 0 && bit <= INTEGER_SIZE) )
		return 0;

		switch (bit) {
		case 1 : return 0x1;
		case 2 : return 0x2;
		case 3 : return 0x4;
		case 4 : return 0x8;
		case 5 : return 0x10;
		case 6 : return 0x20;
		case 7 : return 0x40;
		case 8 : return 0x80;
		case 9 : return 0x100;
		case 10 : return 0x200;
		case 11 : return 0x400;
		case 12 : return 0x800;
		case 13 : return 0x1000;
		case 14 : return 0x2000;
		case 15 : return 0x4000;
		case 16 : return 0x8000;
		case 17 : return 0x10000;
		case 18 : return 0x20000;
		case 19 : return 0x40000;
		case 20 : return 0x80000;
		case 21 : return 0x100000;
		case 22 : return 0x200000;
		case 23 : return 0x400000;
		case 24 : return 0x800000;
		case 25 : return 0x1000000;
		case 26 : return 0x2000000;
		case 27 : return 0x4000000;
		case 28 : return 0x8000000;
		case 29 : return 0x10000000;
		case 30 : return 0x20000000;
		case 31 : return 0x40000000;
		case 32 : return 0x80000000;
		case 33 : return 0x100000000;
		case 34 : return 0x200000000;
		case 35 : return 0x400000000;
		case 36 : return 0x800000000;
		case 37 : return 0x1000000000;
		case 38 : return 0x2000000000;
		case 39 : return 0x4000000000;
		case 40 : return 0x8000000000;
		case 41 : return 0x10000000000;
		case 42 : return 0x20000000000;
		case 43 : return 0x40000000000;
		case 44 : return 0x80000000000;
		case 45 : return 0x100000000000;
		case 46 : return 0x200000000000;
		case 47 : return 0x400000000000;
		case 48 : return 0x800000000000;
		case 49 : return 0x1000000000000;
		case 50 : return 0x2000000000000;
		case 51 : return 0x4000000000000;
		case 52 : return 0x8000000000000;
		case 53 : return 0x10000000000000;
		case 54 : return 0x20000000000000;
		case 55 : return 0x40000000000000;
		case 56 : return 0x80000000000000;
		case 57 : return 0x100000000000000;
		case 58 : return 0x200000000000000;
		case 59 : return 0x400000000000000;
		case 60 : return 0x800000000000000;
		case 61 : return 0x1000000000000000;
		case 62 : return 0x2000000000000000;
		case 63 : return 0x4000000000000000;
		case 64 : return 0x8000000000000000;

		case 0 :
		default : return 0;
	}

	return 0;
}

module.exports = {
	bitflag: (bit) => {

	},

	bitenabled: (num, bit) => {

	},

	bitand: (a, b) => {

	},

	bitor: (a, b) => {

	},

	bitnot (a, b) => {

	},

	bitnotand (a, b) => {

	},

	bitnotor (a, b) => {

	},

	bitxor (a, b) => {

	},

	bitshift_right: (num, size) => {

	},

	bitshift_left: (num, size) => {

	},

	bigger: (what, then) => {

	},

	lesser: (what, then) => {

	},

	equal: (what, to) => {

	},

	biggerequal: (what, then) => {

	},

	lesserequal: (what, then) => {

	},

	compare: (a, b) => {

	},

	outofmax: (to, test) => {

	},

	outofmin: (to, test) => {

	},

	isBaseOfTwo (num) => {

	},

	toBaseOfTwo (num, base) => {

	},

	fromBaseOfTwo (num, base) => {

	}
};
