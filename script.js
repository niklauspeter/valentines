let noButtonPressed = false;

function handleYes() {
    window.location.href = "congratulations.html";
}

function handleNo() {
    const noButton = document.getElementById("noButton");
    const yesButton = document.getElementById("yesButton");
    const centeredImage = document.getElementById("centered-image");
    const congratulationsText = document.getElementById("question1");

    if (!noButtonPressed) {
        // Change the image and text for the first "No" button press
        // const congratulationsContainer = document.getElementById("congratulations-container");
        
        

        congratulationsText.innerHTML = "Eh, eh, Eh ... Makosa!";
        centeredImage.innerHTML = "<img src='therearenorightorwrong.jpg' alt='New Image'>";
        noButton.style.marginLeft = "-200px";

        noButtonPressed = true;

    } else {
    
        const directions = ["left", "right", "up", "down","left","up"]; // Define possible directions

        // Randomly select a direction
        const randomDirection = directions[Math.floor(Math.random() * directions.length)];
        
        // Reset the position of the "NO" button before applying the new movement
        // noButton.style.marginLeft = "0";
        // noButton.style.marginTop = "0";
        
        noButton.style.marginLeft = "-300px";
        // centeredImage.innerHTML = "<img src='isthereaname.jpg' alt='New Image'>";
        noButton.style.marginTop = " 50px";
        // centeredImage.innerHTML = "<img src='letstrythisagain.jpg' alt='New Image'>";
        noButton.style.marginLeft = "400px";
        // centeredImage.innerHTML = "<img src='isthereaname.jpg' alt='New Image'>";
        noButton.style.marginTop = "-200px";
        // centeredImage.innerHTML = "<img src='therearenorightorwrong.jpg' alt='New Image'>";
        
        
        // Move the button aside based on the selected direction
        switch (randomDirection) {
            case "left":
                noButton.style.marginLeft = "-400px";
                centeredImage.innerHTML = "<img src='trumpwronganswer.jpg' alt='New Image'>";
                break;
            case "right":
                noButton.style.marginLeft = "200px";
                centeredImage.innerHTML = "<img src='trumpwronganswer.jpg' alt='New Image'>";
                break;
            case "up":
                noButton.style.marginTop = "-100px";
                centeredImage.innerHTML = "<img src='letstrythisagain.jpg' alt='New Image'>";
                break;
            case "down":
                noButton.style.marginTop = "50px";
                centeredImage.innerHTML = "<img src='trumpwronganswer.jpg' alt='New Image'>";
                break;
        }

        // Disable the button after moving
        noButton.disabled = false;
    }
}
