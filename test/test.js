'use strict';
import path from 'path';
import test from 'ava';
import m from '..';

const otherName = path.join(__dirname, 'pkg.json');

test('async', async t => {
	const x = await m(otherName);
	t.is(x.name, 'unicorn');
	t.truthy(x._id);
});

test.serial('async - default filepath', async t => {
	const x = await m();
	t.is(x.name, 'read-pkg');
});

test('sync', t => {
	const x = m.sync(otherName);
	t.is(x.name, 'unicorn');
	t.truthy(x._id);
});

test.serial('sync - default filepath', t => {
	const x = m.sync();
	t.is(x.name, 'read-pkg');
});
