/*
 * @title Copy
 * @description A task to copy files to the output directory
 */

// Dependencies
import { src, dest } from 'gulp';
import tasks from 'gulp-task-listing';

// Task
export function help(cb) {
	tasks.withFilters(null, 'default')();
	cb();
}
