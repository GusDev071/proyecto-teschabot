import { Component, ElementRef, ViewChild } from '@angular/core';

interface Message {
  content: string;
  isUser: boolean;
}

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: Message[] = [];
  newMessage: string = '';
  isDarkMode: boolean = false;

  @ViewChild('chatBody') chatBodyRef!: ElementRef;
  @ViewChild('scrollBottom') scrollBottomRef!: ElementRef;

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.messages.push({ content: this.newMessage, isUser: true });
      this.newMessage = '';

      setTimeout(() => {
        this.messages.push({ content: 'Respuesta del chatbot', isUser: false });
        this.scrollToBottom();
      }, 200);
    }
  }

  scrollToBottom() {
    const chatBodyElement: HTMLElement = this.chatBodyRef.nativeElement;
    const scrollBottomElement: HTMLElement = this.scrollBottomRef.nativeElement;
    chatBodyElement.scrollTop = scrollBottomElement.offsetTop;
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }
}

interface Message {
  content: string;
  isUser: boolean;
}
