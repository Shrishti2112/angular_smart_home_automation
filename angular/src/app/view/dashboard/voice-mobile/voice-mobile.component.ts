import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-voice-mobile',
  standalone: true,
  imports: [NgFor],
  templateUrl: './voice-mobile.component.html',
  styleUrl: './voice-mobile.component.css'
})
export class VoiceMobileComponent {
  voiceCommands:any;
}
