import {classNames} from '../utils/utils';

test('add `class1` and `class2` return `class1 class2`', () => {
	expect(classNames('class1','class2')).toBe('class1 class2');
});

test('nothing input return a void string ``', () => {
	expect(classNames()).toBe('');
});

test('add only a class name `class0` return `class0`', () => {
	expect(classNames('class0')).toBe('class0');
});