import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-video-recognition",
  templateUrl: "./video-recognition.component.html",
  styleUrls: ["./video-recognition.component.scss"]
})
export class VideoRecognitionComponent implements OnInit {
  video = document.querySelector("video");
  img = document.querySelector("img");
  bg = document.querySelector("body");
  // textDetector = new window['TextDetector']();
  SpeechRecognition: any;
  recognition: any;

  constructor() {}

  ngOnInit() {
    this.video = document.querySelector("video");
    this.startVideo();
  }

  async startVideo() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true });
    this.video.srcObject = stream;
    await this.video.play();
    this.SpeechRecognition =
      window["speechRecognition"] || window["webkitSpeechRecognition"];
    this.recognition = new this.SpeechRecognition();

    this.recognition.onstart = function() {
      console.log("Voice Is Activated, You Can Speak");
    };

    // this.recognition.onresult = function(event) {
    //    console.log(event);
    // }
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.onresult = this.handleResult;
    this.recognition.start();
  }

  handleResult = result => {
    let text = result.results[result.results.length - 1][0].transcript;
    let color = text.split()[text.split().length - 1];
    let videoBackground = document.getElementById("video-backgrnd");
    videoBackground.style.boxShadow = `0 0 40px ${color}`;
    let videoText = document.getElementById("video-text");
    // videoText.innerHTML = text;
    switch(color.trim().toLowerCase()) {
      case 'reload': location.reload();
        break;
      case 'refresh': location.reload();
        break;
      case 'google': window.open("https://www.google.com");
        break;
      default: videoText.innerHTML = text;
    }
  };
}
