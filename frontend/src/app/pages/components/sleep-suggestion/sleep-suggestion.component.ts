import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sleep-suggestion',
  templateUrl: './sleep-suggestion.component.html',
  styleUrls: ['./sleep-suggestion.component.scss']
})
export class SleepSuggestionComponent {

  private info:{title: string, iconURL: string, text: string}[] = [
    {title:"dndsljn",iconURL:"",text:""},
    {title:"ksfjvbk",iconURL:"",text:""},
    {title:"kjskfjv",iconURL:"",text:""},
    {title:"ksfjv",iconURL:"",text:""},
    {title:"lkdvn",iconURL:"",text:""},
    {title:"kjsvn",iconURL:"",text:""},
  ];

  private titles:string[] = ["Reduce screen time","Low average sleep","Late night meals","Late night sleep","Exercise time"];
  private icons:string[] = ["screen-time","average-sleep","night-meals","late","exercise"];
  private texts:string[] = [
    "You had 2 hours of screen time right before. This can affect your sleep in a bad way.",
    "You have very low average sleep.Set some goals for your sleep schedule and we will help you achieve it",
    "You ate 1 hour before you go to sleep.This affects your sleep quality.We suggest you to eat at least 2 hours before sleep.",
    "You slept at 1.40 am. Take care of your sleep schedule. A consistent sleep schedule can do wonders for your overall well-being.",
    "You exercised one hour before bed yesterday. Consider wrapping up your workout a bit earlier to allow your body to wind down."
  ];

  index:number = 1;
  title:string = this.titles[0];
  img:string = this.icons[0];
  text:string = this.texts[0];

  public showNextSuggestion(){
    if(this.index >= this.titles.length) this.index = 0;
    this.updateSuggestion(this.index);
    this.index++;
  }

  public showPreviousSuggestion(){
    let i:number;
    this.index--;
    if(this.index <= 0){
      this.updateSuggestion(4);
      this.index=5;
    }
    else {
      i=this.index;
      this.updateSuggestion(--i);
    }
  }

  private updateSuggestion(index:number){
    this.img = this.icons[index];
    this.title = this.titles[index];
    this.text = this.texts[index];
  }

  
  public GesturesStr: string[] = [
    "SWIPE_LEFT",
    "SWIPE_UP",
    "SWIPE_DOWN",
    "SWIPE_RIGHT",
    "CIRCLE_CLOCKWISE",
    "CIRCLE_COUNTERCLOCKWISE",
    "PINCH",
  ];

  ngOnInit() {
    (window as any)["electronAPI"].onGesture(
      (arg: any) => {
        console.log("Gesture recognised: ", this.GesturesStr[arg])
        if(this.GesturesStr[arg] == "SWIPE_RIGHT") this.showNextSuggestion();
        if(this.GesturesStr[arg] == "SWIPE_LEFT") this.showPreviousSuggestion();
      }
    );
  }

  @ViewChild('appReplaceCursor', { static: true }) cursorReplacement: ElementRef = {} as ElementRef;

  @HostListener('mousemove', ['$event'])
  onmousemove(event: MouseEvent) {
    if (this.cursorReplacement.nativeElement) {
      this.cursorReplacement.nativeElement.style.left = event.pageX + 'px';
      this.cursorReplacement.nativeElement.style.top = event.pageY + 'px';
    }
  }
}
