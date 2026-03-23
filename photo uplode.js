async function uploadToCloudinary(file) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'dileswari_preset'); // जो नाम आपने स्टेप 1 में रखा

    try {
        const response = await fetch('https://api.cloudinary.com/v1_1/dvfb33cbt/image/upload', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();
        
        if (data.secure_url) {
            console.log("Success! Photo Link:", data.secure_url);
            alert("फोटो अपलोड हो गई है!");
            // अब आप इस 'data.secure_url' को अपनी स्क्रीन पर दिखा सकते हैं
        } else {
            console.error("Upload Error:", data);
            alert("कुछ गड़बड़ हुई!");
        }
    } catch (error) {
        console.error("Error:", error);
    }
}
