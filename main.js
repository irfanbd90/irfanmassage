function togglePlay() {
    const audioPlayer = document.getElementById('audioPlayer');
    
    if (audioPlayer.paused) {
        audioPlayer.play(); // Play the audio
    } else {
        audioPlayer.pause(); // Pause the audio
    }
}
