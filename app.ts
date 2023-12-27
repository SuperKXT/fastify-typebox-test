import { Type } from '@sinclair/typebox';

// Works if you import the type from the type-provider-typebox package
// import { Type } from '@fastify/type-provider-typebox';

import { fastify } from 'fastify';

import type { TypeBoxTypeProvider } from '@fastify/type-provider-typebox';

const server = fastify().withTypeProvider<TypeBoxTypeProvider>();

server.get(
	'/',
	{
		schema: {
			// Mapped Types Only Available in Revision 0.32.0
			body: Type.Mapped(
				Type.TemplateLiteral('b${0|1}${0|1}${0|1}${0|1}'),
				(K) => Type.String(),
			),
		},
	},
	(req) => {
		req.body.b0000;
		req.body.b0001;
		req.body.b0010;
		req.body.b0011;
		// ..
		req.body.b1111;
	},
);
