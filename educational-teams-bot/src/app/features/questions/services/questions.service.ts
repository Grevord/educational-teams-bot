import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from 'src/app/shared/classes/question';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  /**
   * Base URL of the API.
   */
  private apiBaseUrl : string;

  /**
   * Initializes a new instance of the QuestionService class.
   * @param httpClient HttpClient to use in this service.
   */
  constructor(private httpClient: HttpClient) {
    this.apiBaseUrl = environment.apiEndpoint;
  }

  /**
   * Request the API to get the list of questions.
   * @returns An Observable containing an array of questions.
   */
  getQuestions(): Observable<Array<Question>> {
    return this.httpClient.get<Array<Question>>(`${this.apiBaseUrl}api/questions`, {headers: {"Content-Type": "application/json"}});
  }
}
