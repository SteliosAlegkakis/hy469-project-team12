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
        'Good morning Nick , your sleep quality was 82 percent good. Do you agree?'
      );
      console.log(
        'Good morning Nick , your sleep quality was 82 percent good. Do you agree?'
      );
      this.smart_speaker.addCommand('YES', () => {
        this.smart_speaker.speak('THANK YOU FOR YOUR FEEDBACK');
        console.log('thanks for feedback');
      });
      this.smart_speaker.addCommand('NO', () => {
        this.smart_speaker.speak(
          'THANK YOU FOR YOUR FEEDBACK , WE WILL COUNT IT OUT'
        );
        console.log('thanks for feedback , we will count it out');
      });
      this.smart_speaker.stop(); //it doesnt stop
    });

    // throw new Error('Method not implemented.');
  }
}
