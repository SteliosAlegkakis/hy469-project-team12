import { Component, OnInit } from '@angular/core';
import { SocketsService } from 'src/app/global/services/sockets/sockets.service';
import { SmartSpeakerService } from 'src/app/global/services/smart-speaker/smart-speaker.service';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.scss'],
})
export class BathroomComponent implements OnInit {
  constructor(
    private sockets: SocketsService,
    private smart_speaker: SmartSpeakerService
  ) {}
  ngOnInit(): void {
    this.smart_speaker.initialize();
    this.smart_speaker.start();
    this.smart_speaker.addCommand('HELLO SMART', () => {
      this.smart_speaker.speak(
        'Good morning John , how was your sleep last night ?'
      );
      this.smart_speaker.addCommand(['Good','It was good'], () => {
        this.smart_speaker.speak('That is good to hear, take a look at your sleep report and suggestions to improve your sleep further.');
      });
      this.smart_speaker.addCommand(['Bad','It was bad','It was not good'], () => {
        this.smart_speaker.speak(
          'I am sorry to hear that, take a look at your sleep suggestions to help you improve your sleep.'
        );
      });
    });
  }
}
