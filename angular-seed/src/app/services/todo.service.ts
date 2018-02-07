import { Injectable } from '@angular/core';
import { Todo} from '../models/todo';
import { APIService } from '../common/api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TodoService extends APIService {
private resourceUrl = 'api';

    list(): Observable<Todo[]> {
        return this.get(this.resourceUrl+"/todos");
    }

    create(description: string, priority: Number = 1, completed: boolean = false): Observable<Todo> {
        return this.post(this.resourceUrl+"/todo", new Todo(description,priority,completed));
    }
}