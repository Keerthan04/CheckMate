//when querying through convex we will have the file name as that table name only as convention

import {query} from './_generated/server';

//writing a get and query to get all todos
export const get = query({
    args:{},
    handler: async (ctx) =>{
        return await ctx.db.query("todos").collect();
    }
})