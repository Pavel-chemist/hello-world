import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService 
{

  a_words: string[] =  [ "word1", "word2", "word3", "word4" ];

  getWords() 
  {
    return this.a_words;
  }
}
