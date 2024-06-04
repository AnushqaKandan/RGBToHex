function convertRGBToHex() {
    // Get the RGB values from the input fields
    const r = parseInt(document.getElementById('redInput').value);
    const g = parseInt(document.getElementById('greenInput').value);
    const b = parseInt(document.getElementById('blueInput').value);
    
    // Validate the RGB values
    if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        document.getElementById('result').textContent = "Invalid RGB values";
        return;
    }
    
    // Convert each color component to a two-digit hexadecimal number
    const toHex = (value) => value.toString(16).padStart(2, '0').toUpperCase();
    
    // Combine the hex values
    const hex = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    
    // Display the result
    document.getElementById('result').textContent = `Hex: ${hex}`;
}
