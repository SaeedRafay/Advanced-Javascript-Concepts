// This is 'Global' scope


function localScope() {
	// This is 'Function' or 'Local' scope

	function nestedScope() {
		// Nested function scope
	}
}


{
	// This is 'Block' scope
}


if (a == '2') {
	// This is 'Block' scope
}


for (var i = 0; i < 10; i++) {
	// This is 'Block' scope
}