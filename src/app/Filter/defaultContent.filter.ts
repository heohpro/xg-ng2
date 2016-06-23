import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'defaultContent'})
export class DefaultContentFilter implements PipeTransform {
    transform(value: string, exponent: string): string {
        return (!value|| value == '')? exponent? exponent: '无' : value;
    }
}