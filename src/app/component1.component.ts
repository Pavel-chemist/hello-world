import { Component } from '@angular/core';
import { TestServiceService } from './test-service.service';

@Component(
    {
        selector: 'test', // <c1>
        template: 
        `<h2>Title: {{ getTitle() }}</h2>
        <ul>
            <li *ngFor="let word of words">
                {{ word }}
            </li>
        </ul>`
    }
)

export class Component1Component
{
    words; 
    length;

    constructor(service: TestServiceService)
    {
        this.words = service.getWords();
        this.length = service.getWords().length;
    }

    getTitle()
    {
        return `List of ${this.length} words`;
    }
}