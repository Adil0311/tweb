"strict mode"

var a = 2; 		// variabile globale
// qui: a = 2, b = undefined, c = undefined

function scopeTest() {					
	a = 2*2;
	b = 3; 	// dichiarata globale implicitamente
	var c = 8; 	// variabile locale
// qui: a = 4, b = 3, c = 8
}

scopeTest();
// qui: a = 4, b = 3, c = undefined  	