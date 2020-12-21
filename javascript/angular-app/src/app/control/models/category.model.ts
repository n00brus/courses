export type OperationTypeCode = 'profit' | 'consumption';
import { Injectable } from '@angular/core';
export interface Categorie {
  value: number;
  description: string;
}
export interface Category {
  type: OperationTypeCode;
  name: string;
  selected: boolean;
  operationsInfo: Categorie[];
}
  const allCategories : Category[] = [
    {
      type: 'consumption',
      name: 'Бензин',
      selected:false,
      operationsInfo: [
        {
          value: 23,
          description: 'Залил 50 литров бензина',
          
        },
        {
          value: 33,
          description: 'Залил 100 литров бензина',
          
        },
        {
          value: 43,
          description: 'Залил 150 литров бензина',
          
        }
      ]
      
    },
    {
      type: 'consumption',
      name: 'Еда',
      selected:false,
      operationsInfo: [
        {
          value: 23,
          description: 'Покушал '
        }
      ]
    },
    {
      type: 'consumption',
      name: 'Интернет',
      selected:false,
      operationsInfo: [
        {
          value: 23,
          description: 'Залил за интернет '
        }
      ]
    },
    {
      type: 'profit',
      name: 'Зарплата',
      selected:false,
      operationsInfo: [
        {
          value: 23,
          description: 'Получил зп'
        },
        {
          value: 333,
          description: 'Получил зп',
          
        },
        {
          value: 433,
          description: 'Получил зп',
          
        }
      ]
    },
    {
      type: 'profit',
      name: 'Зарплата 2',
      selected:false,
      operationsInfo: [
        {
          value: 23,
          description: 'Получил зп второе'
        }
      ]
    },
    {
      type: 'profit',
      name: 'Премия',
      selected:false,
      operationsInfo: [
        {
          value: 23,
          description: 'Получил премию'
        }
      ]
    }
  ]



@Injectable()
export class CategoryService {
   public categories = allCategories;
}