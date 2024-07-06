//when querying through convex we will have the file name as that table name only as convention

import { v } from 'convex/values';
import {mutation, query} from './_generated/server';

//writing a get and query to get all todos
export const get = query({
    args:{},
    handler: async (ctx) =>{
        return await ctx.db.query("todos").collect();
    }
})


export const completedTodos = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("todos")
      .filter((q) => q.eq(q.field("isCompleted"), true))
      .collect();
  },
});

export const incompleteTodos = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db
        .query("todos")
        .filter((q) => q.eq(q.field("isCompleted"), false))
        .collect();
    },
  });

  export const totalTodos = query({
    args: {},
    handler: async (ctx) => {
      const todos = await ctx.db
        .query("todos")
        .filter((q) => q.eq(q.field("isCompleted"), true))
        .collect();//gives array type
        return todos.length || 0;
    },
  });
//mutation to insert,update,delete in a db and table name is not necessary as same file name is of table name
export const checkATodo = mutation({
    args:{ taskId: v.id("todos")},
    handler: async (ctx,{taskId})=>{
        const newTaskId = await ctx.db.patch(taskId,{
            isCompleted: true
        });
        return newTaskId;
    }
})

export const unCheckATodo = mutation({
    args:{ taskId: v.id("todos")},
    handler: async (ctx,{taskId})=>{
        const newTaskId = await ctx.db.patch(taskId,{
            isCompleted: false
        });
        return newTaskId;
    }
})