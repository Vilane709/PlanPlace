import { Injectable } from '@angular/core';
import { Schedule } from '../interfaces';



@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor() { }

  private schedule: Schedule[] = [
    {
      path: 'mon',
      value: 'Понедельник',
      tasks: ['Сон', 'Гимнастика', 'Чтение', 'Прогулка']
    },
    {
      path: 'tue',
      value: 'Вторник',
      tasks: ['Сон', 'Гимнастика', 'Чтение', 'Прогулка', 'Отдых']
    },
    {
      path: 'wed',
      value: 'Среда',
      tasks: ['Сон', 'Гимнастика', 'Чтение', 'Прогулка']
    },
    {
      path: 'thu',
      value: 'Четверг',
      tasks: ['Сон']
    },
    {
      path: 'fri',
      value: 'Пятница',
      tasks: ['Сон', 'Гимнастика', 'Чтение', 'Отдых']
    },
    {
      path: 'sat',
      value: 'Суббота',
      tasks: ['Сон', 'Гимнастика', 'Прогулка']
    },
    {
      path: 'sun',
      value: 'Воскресенье',
      tasks: ['Сон', 'Гимнастика']
    }
  ]

  public getSchedule(): Schedule[] {
    return this.schedule;
  }

  /**
    Эта функция возвращает массив задач на конкретный день
    @param {string} day - день, формата: 'mon'
    @returns {string[]} - Массив задач на предоставленный день
  */
  public getTasksByDay(day: string): string[] {
    const finded = this.schedule.find(item => item.path === day);

    if (finded === undefined) {
      return [];
    } else {
      return finded.tasks;
    }
  }

  public сheckDayPath(path: string): boolean {
    const finded = this.schedule.find(item => item.path === path);

    // if (finded === undefined) {
    //   return false;
    // } else {
    //   return true;
    // }
    return finded === undefined ? false : true;
  }
}
